import React, { useState } from "react"
import { Icon } from "@iconify/react"
import Sidebar from "./Sidebar"

interface MobileSidebarProps {
  routeMap: {
    [key: string]: string
  }
}

export default function MobileSidebar({ routeMap }: MobileSidebarProps) {
  const [isHamburgerSidebarOpen, setIsHamburgerSidebarOpen] = useState(false)

  return (
    <>
      {!isHamburgerSidebarOpen && (
        <Icon
          onClick={() => setIsHamburgerSidebarOpen(true)}
          className="
        text-slate-50
        w-10 h-10
        fixed
        ml-5 mt-5 xs:ml-7 xs:mt-7
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
        >
          <div
            className="
                w-[75%] h-screen
                pl-5 pt-5
                flex flex-col
                bg-gradient-to-r from-sky-100/10 to-sky-200/0
                backdrop-blur
                shadow-xl
                "
          >
            <Sidebar routeMap={routeMap} />
          </div>
        </div>
      )}
    </>
  )
}
