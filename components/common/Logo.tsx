import Image from "next/image"

export const Logo = (
  <>
    <div className="dark:hidden inline-block">
      <Image alt="logo" src="/favicon.png" width={65} height={65} />
    </div>
    <div className="dark:inline-block hidden">
      <Image alt="logo" src="/favicon-dark.png" width={65} height={65} />
    </div>
  </>
)
