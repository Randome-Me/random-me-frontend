import { useState } from "react"
import { Icon } from "@iconify/react"
import Sidebar from "./Sidebar"

interface MobileSidebarProps {
  routeMap: {
    [key: string]: string
  }
  menuText: string
}

export default function MobileSidebar({
  routeMap,
  menuText,
}: MobileSidebarProps) {
  const [isHamburgerSidebarOpen, setIsHamburgerSidebarOpen] = useState(false)

  return (
    <>
      {!isHamburgerSidebarOpen && (
        <Icon
          onClick={() => setIsHamburgerSidebarOpen(true)}
          className="
          block
        text-slate-50
          w-10 h-10
          cursor-pointer
          "
          icon="ci:hamburger"
        />
      )}
      {isHamburgerSidebarOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsHamburgerSidebarOpen(false)
            }
          }}
          className="
            backdrop-blur-md
            h-screen w-screen
            p-10
            fixed"
        >
          <Sidebar menuText={menuText} routeMap={routeMap} />
        </div>
      )}
    </>
  )
}
