import Glass from "components/glass"
import { FormEvent, useState } from "react"
import { Icon } from "@iconify/react"
import Link from "next/link"
import Image from "next/image"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const minUsernameLength = 4
  const maxUsernameLength = 16
  const minPasswordLength = 8

  const loginInputContainerClass =
    "w-full border-[1px] border-black-gray rounded flex justify-center items-center focus-within:border-yellow focus-within:ring-yellow overflow-hidden"
  const loginInputClass =
    "bg-transparent border-none flex-1 focus:ring-transparent focus:border-none"
  const loginInputIconClass = "mx-2 w-5 h-5 text-black-gray/75"

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username.trim() === "") {
      alert("Please enter a username")
      return
    }
    if (password.trim() === "") {
      alert("Please enter a password")
      return
    }

    alert(`Logging in as ${username}`)
    setUsername("")
    setPassword("")
  }

  const loginWithGoogle = () => {
    alert("Logging in with Google")
  }

  const loginWithFacebook = () => {
    alert("Logging in with Facebook")
  }

  return (
    <div className="flex justify-center pt-20">
      <Image
        src="/images/bg-login-register.svg"
        alt="background image"
        layout="fill"
        objectFit="cover"
      ></Image>

      <h1 className="sr-only">Login</h1>

      <Glass className="space-y-8">
        <strong className="text-black text-5xl font-extrabold">
          Random Me.
        </strong>

        <form onSubmit={handleSubmit} className="mt-8">
          <h2 className="sr-only">Login with username and password</h2>
          <div className="flex flex-col space-y-4">
            <div className={loginInputContainerClass}>
              <Icon icon="bx:bx-user-circle" className={loginInputIconClass} />
              <input
                required
                minLength={minUsernameLength}
                maxLength={maxUsernameLength}
                value={username}
                placeholder="Username"
                type="text"
                className={loginInputClass}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={loginInputContainerClass}>
              <Icon
                icon="ri:lock-password-fill"
                className={loginInputIconClass}
              />
              <input
                required
                minLength={minPasswordLength}
                value={password}
                placeholder="Password"
                type="password"
                className={loginInputClass}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-yellow py-2 text-xl rounded shadow-md 
              text-black mt-8 font-bold active:shadow-none"
            >
              LOGIN
            </button>
            <div className="flex justify-between">
              <Link href="/register">
                <a className="clickable-text-teal">Register</a>
              </Link>
              <span className="clickable-text-teal">Forgot password?</span>
            </div>
          </div>
        </form>

        <div className="flex justify-center items-center flex-col">
          <span aria-hidden="true" className="mb-1">
            or login with
          </span>
          <div className="flex space-x-2">
            <h2 className="sr-only">Login with Google</h2>
            <Icon
              className="cursor-pointer w-9 h-9"
              icon="flat-color-icons:google"
              onClick={loginWithGoogle}
            />
            <h2 className="sr-only">Login with Facebook</h2>
            <Icon
              className="cursor-pointer text-[#4267b2] w-8 h-8"
              icon="akar-icons:facebook-fill"
              onClick={loginWithFacebook}
            />
          </div>
        </div>

        <span className="block text-center">
          or <span className="clickable-text-teal">continue as guest</span>
          <Icon
            icon="bi:info-circle-fill"
            className="inline clickable-text-teal ml-2"
          />
        </span>
      </Glass>
    </div>
  )
}
