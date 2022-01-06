import BarWave from "components/common/BarWave"
import { useAppSelector } from "hooks"
import i18n from "locales"
import { useEffect } from "react"
import { saveToLocal } from "utils"
import { guestUserId } from "utils/constants"

interface LoaderLayoutProps {
  children: React.ReactNode
}

const LoaderLayout = ({ children }: LoaderLayoutProps) => {
  const { isLoading, loaderAfter, loaderBefore, checkedMe } = useAppSelector(
    (state) => state.app
  )
  const user = useAppSelector((state) => state.user)

  useEffect(() => {
    i18n.changeLanguage(user.language)
    if (user._id === guestUserId) {
      saveToLocal("user", user)
    }
  }, [user])

  return (
    <div>
      <div
        className={`
        fixed
        h-screen
        w-screen
        z-50
        flex
        flex-col
        justify-center
        items-center
        space-y-4 
        ${
          checkedMe
            ? "bg-cyan-300/50 dark:bg-gray-900/50"
            : "bg-cyan-600 dark:bg-gray-900"
        }
        ${isLoading ? "" : "hidden"}`}
        aria-hidden="true"
      >
        {loaderBefore}
        <BarWave
          color="rgb(250 204 21)" // yellow-400
          className="
          w-[3em]
        "
        />
        {loaderAfter}
      </div>
      {children}
    </div>
  )
}

export default LoaderLayout
