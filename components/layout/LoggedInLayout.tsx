import Sidebar from "components/common/Sidebar"
import MobileSidebar from "components/common/MobileSidebar"

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
    <>
      <div className="fixed inset-16 hidden md:block">
        <Sidebar routeMap={routeMap} />
      </div>
      <div className="md:hidden">
        <MobileSidebar routeMap={routeMap} />
      </div>
      {children}
    </>
  )
}
