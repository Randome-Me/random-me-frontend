import { useAppDispatch, useAppSelector } from "hooks"
import { useEffect, useRef } from "react"
import { setUser } from "store/slice/user"
import { getLocalUser, saveToLocal } from "utils"

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const firstLoad = useRef(true)

  useEffect(() => {
    // user on the first load is set to default user initially
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }
    saveToLocal("user", user)
  }, [user])

  useEffect(() => {
    dispatch(setUser(getLocalUser()))
  }, [])

  return <div>{children}</div>
}

export default AuthProvider
