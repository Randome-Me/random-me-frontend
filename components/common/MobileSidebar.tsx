import { Dispatch, SetStateAction } from "react"
import { Icon } from "@iconify/react"
import Sidebar from "./Sidebar"

interface MobileSidebarProps {
  routeMap: {
    [key: string]: string
  }
  menuText: string
  isHamburgerSidebarOpen: boolean
  setIsHamburgerSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileSidebar({
  routeMap,
  menuText,
  isHamburgerSidebarOpen,
  setIsHamburgerSidebarOpen,
}: MobileSidebarProps) {
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
        <div>
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
              fixed
              inset-0"
          >
            <Sidebar menuText={menuText} routeMap={routeMap} />
          </div>
        </div>
      )}
    </>
  )
}
