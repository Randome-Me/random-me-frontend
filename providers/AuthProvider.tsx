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

interface AuthProviderProps {
  children: React.ReactNode
}

// TODO add logo
const logo = <div></div>

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
      if (router.pathname === "/change-password") {
        setCheckedMe(true)
        return
      }

      showCheckMeLoader()
      const userDB = await checkMe()
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
