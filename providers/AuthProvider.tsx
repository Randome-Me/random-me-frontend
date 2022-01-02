import { useAppDispatch } from "hooks"
import { useEffect } from "react"
import { setUser } from "store/slice/user"
import { getLocalUser } from "utils"

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setUser(getLocalUser()))
  }, [])
  return <div>{children}</div>
}

export default AuthProvider
