import { Icon } from "@iconify/react"
import Link from "next/link"
import { FormEvent, useState } from "react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const minUsernameLength = 4
  const maxUsernameLength = 16
  const minPasswordLength = 8

  const loginInputContainerClass =
    "w-full border-[1px] border-black-gray rounded flex justify-center items-center focus-within:border-teal-600 focus-within:ring-teal-600 overflow-hidden"
  const loginInputClass =
    "bg-transparent border-none flex-1 focus:ring-transparent focus:border-none"
  const loginInputIconClass = "mx-2 w-5 h-5 text-black-gray/75 hidden sm:inline"

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

  const handleForgotPassword = () => {
    alert("Forgot password")
  }

  return (
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
          <Icon icon="ri:lock-password-fill" className={loginInputIconClass} />
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
        text-black mt-4 font-bold active:shadow-none 
        focus-visible:outline-teal-600
          md:mt-8"
        >
          LOGIN
        </button>
        <div className="flex justify-between">
          <Link href="/register">
            <a className="clickable-text-teal">Register</a>
          </Link>
          <a
            onClick={handleForgotPassword}
            href=""
            className="clickable-text-teal"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </form>
  )
}
