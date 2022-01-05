import Image from "next/image"

export interface PageBackgroundProps {
  light: string
  dark: string
  children?: React.ReactNode
  objectPosition?: string
}

export default function PageBackground({
  children,
  light,
  dark,
  objectPosition = "50% 50%",
}: PageBackgroundProps) {
  return (
    <>
      <div className="fixed w-screen h-screen -z-50" aria-hidden="true">
        <div className="dark:hidden">
          <Image
            src={light}
            alt="background image"
            layout="fill"
            objectFit="cover"
            objectPosition={objectPosition}
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src={dark}
            alt="background image"
            layout="fill"
            objectFit="cover"
            objectPosition={objectPosition}
          />
        </div>
      </div>
      {children}
    </>
  )
}
