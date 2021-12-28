import {
  LoginInputText,
  LoginInputPassword,
} from "components/common/LoginInput"
import Link from "next/link"
import { FormEvent, useState } from "react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
        <LoginInputText
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInputPassword
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <button
          type="submit"
          className="font-Spartan font-bold w-full bg-yellow pb-2 pt-3 text-xl rounded shadow-md
        text-black mt-4  active:shadow-none 
        focus-visible:outline-teal-600
          md:mt-8"
        >
          LOGIN
        </button>
        <div className="flex justify-between">
          <Link href="/register">
            <a className="clickable-text-teal text-sm">Register</a>
          </Link>
          <a
            onClick={handleForgotPassword}
            href="#"
            className="clickable-text-teal text-sm"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </form>
  )
}
