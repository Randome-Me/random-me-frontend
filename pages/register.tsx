import {
  LoginInputEmail,
  LoginInputPassword,
  LoginInputText,
} from "components/common/LoginInput"
import LoginRegisterLayout from "components/layout/LoginRegisterLayout"
import Head from "next/head"
import Link from "next/link"
import { FormEvent, useState } from "react"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ username, email, password, passwordConfirm })
  }

  return (
    <>
      <Head>
        <title>Register | Random Me</title>
        <meta
          name="description"
          content="Register a new account with Random Me."
        />
      </Head>

      <LoginRegisterLayout topic="Register">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <LoginInputText
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
          <LoginInputEmail
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <LoginInputPassword
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <LoginInputPassword
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            placeholder="Confirm Password"
          />

          <div className="space-y-1">
            <button type="submit" className="login-register-button">
              REGISTER
            </button>
            <div className="flex justify-between">
              <Link href="/login">
                <a className="clickable-text-teal text-sm">Back to login</a>
              </Link>
            </div>
          </div>
        </form>
      </LoginRegisterLayout>
    </>
  )
}
