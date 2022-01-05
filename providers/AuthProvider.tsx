import { useAppDispatch, useAppSelector } from "hooks"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import {
  hideLoader,
  setLoaderBefore,
  showLoader,
  unsetLoaderBefore,
} from "store/slice/app"
import { setUser } from "store/slice/user"
import { getLocalUser, saveToLocal } from "utils"
import { checkMe } from "utils/axios/request/auth"
import { guestUserId, nullUserId } from "utils/constants"
import Image from "next/image"
import { User } from "types"

interface AuthProviderProps {
  children: React.ReactNode
}

const logo = (
  <>
    <div className="dark:hidden inline-block">
      <Image alt="logo" src="/favicon.png" width={65} height={65} />
    </div>
    <div className="dark:inline-block hidden">
      <Image alt="logo" src="/favicon-dark.png" width={65} height={65} />
    </div>
  </>
)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { i18n } = useTranslation()
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const firstLoad = useRef(true)
  const [checkedMe, setCheckedMe] = useState(false)

  const showCheckMeLoader = () => {
    dispatch(setLoaderBefore(logo))
    dispatch(showLoader())
  }

  const hideCheckMeLoader = () => {
    dispatch(unsetLoaderBefore())
    dispatch(hideLoader())
  }

  useEffect(() => {
    // user on the first load is set to default user initially
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }
    if (!user) return

    i18n.changeLanguage(user.language)

    if (user._id === guestUserId) {
      saveToLocal("user", user)
    }
  }, [i18n, user])

  useEffect(() => {
    const onMount = async () => {
      if (router.pathname === "/reset-password") {
        setCheckedMe(true)
        return
      }

      showCheckMeLoader()
      const {
        data: userDB,
      }: {
        data: User | null
      } = await checkMe().catch(() => ({
        data: null,
      }))
      setCheckedMe(true)

      if (userDB) {
        dispatch(setUser(userDB))
        if (router.pathname === "/login" || router.pathname === "/register") {
          await router.replace("/")
        }
        hideCheckMeLoader()
        return
      }

      const localUser = getLocalUser()

      if (!localUser) {
        if (router.pathname === "/register") {
          hideCheckMeLoader()
          return
        }
        await router.replace("/login")
        hideCheckMeLoader()
        return
      }

      if (localUser._id === nullUserId) {
        await router.replace("/login")
        hideCheckMeLoader()
        return
      }

      // anonymous user is saved
      dispatch(setUser(localUser))
      if (router.pathname === "/login" || router.pathname === "/register") {
        await router.replace("/")
      }
      hideCheckMeLoader()
    }
    onMount()
  }, [])

  return <>{checkedMe && <>{children}</>}</>
}

export default AuthProvider
