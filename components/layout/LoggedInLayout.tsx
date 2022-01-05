import Sidebar from "components/common/Sidebar"
import MobileSidebar from "components/common/MobileSidebar"
import { useTranslation } from "react-i18next"
import ThemeAndLanguageSwitch from "components/common/ThemeAndLanguageSwitch"
import { useState } from "react"
import GitHubRepos from "components/common/GitHubRepos"

interface LoggedInLayoutProps {
  children?: React.ReactNode
}

export default function LoggedInLayout({ children }: LoggedInLayoutProps) {
  const { t } = useTranslation()
  const [isHamburgerSidebarOpen, setIsHamburgerSidebarOpen] = useState(false)

  const routeMap = {
    "/": t("home.title"),
    "/topics": t("topics.title"),
    "/account": t("account.title"),
    "/random-policies": t("policies.title"),
  }
  const menuText = t("utils.menuText")

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
        <Sidebar menuText={menuText} routeMap={routeMap} />
      </div>
      <div
        className="
        lg:hidden flex 
        justify-between
        items-center
        z-10
        px-6
        h-14"
      >
        <MobileSidebar
          isHamburgerSidebarOpen={isHamburgerSidebarOpen}
          setIsHamburgerSidebarOpen={setIsHamburgerSidebarOpen}
          menuText={menuText}
          routeMap={routeMap}
        />
        {!isHamburgerSidebarOpen && <ThemeAndLanguageSwitch />}
      </div>
      <div className="flex-1 max-h-[90vh]">{children}</div>
      <div className="lg:hidden mt-2 mx-auto">
        <GitHubRepos />
      </div>
      <div
        className="
        lg:w-[14rem]
        hidden lg:flex
        flex-col
        justify-between
        py-[2rem]
        "
      >
        <ThemeAndLanguageSwitch />
        <GitHubRepos />
      </div>
    </div>
  )
}
