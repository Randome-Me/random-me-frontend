import Image from "next/image"

export interface PageBackgroundProps {
  children?: React.ReactNode
  src: string
  objectPosition?: string
}

export default function PageBackground({
  children,
  src,
  objectPosition = "50% 50%",
}: PageBackgroundProps) {
  return (
    <>
      <div className="fixed w-screen h-screen -z-50" aria-hidden="true">
        <Image
          src={src}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition={objectPosition}
        />
      </div>
      {children}
    </>
  )
}
