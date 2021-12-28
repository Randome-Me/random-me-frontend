import Image from "next/image"

export interface PageBackgroundProps {
  children: React.ReactNode
  src: string
}

export default function PageBackground({ children, src }: PageBackgroundProps) {
  return (
    <>
      <div className="fixed w-screen h-screen -z-50" aria-hidden="true">
        <Image
          src={src}
          alt="background image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {children}
    </>
  )
}
