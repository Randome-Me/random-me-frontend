import Sidebar from "components/common/Sidebar"
import MobileSidebar from "components/common/MobileSidebar"
import LanguageSwitch from "components/common/LanguageSwitch"

interface LoggedInLayoutProps {
  children?: React.ReactNode
}

const routeMap = {
  "/": "Random Me",
  "/topics": "Topics",
  "/account": "Account",
  "/random-policies": "Random Policies",
}

export default function LoggedInLayout({ children }: LoggedInLayoutProps) {
  return (
    <div
      className="
    flex
    flex-col lg:flex-row
    h-screen"
    >
      <div
        className="
        hidden lg:flex 
        justify-center 
        w-[14rem] 
        pt-[2rem]
    "
      >
        <Sidebar routeMap={routeMap} />
      </div>
      <div
        className="
        lg:hidden flex 
        z-10
        h-[5rem]"
      >
        <MobileSidebar routeMap={routeMap} />
      </div>
      <div className="flex-1">{children}</div>
      <div
        className="
        w-[14rem]
        h-[5rem]
        "
      >
        <div
          className="
        lg:flex
        justify-center
        pt-[2rem]
        "
        >
          <LanguageSwitch />
        </div>
      </div>
    </div>
  )
}
