import Glass from "components/common/Glass"
import Image from "next/image"
import LoginForm from "components/route/login/LoginForm"
import LoginSocialMedia from "components/route/login/LoginSocialMedia"
import ContinueAsGuest from "components/route/login/ContinueAsGuest"

export default function Login() {
  return (
    <div className="flex justify-center pt-20">
      <Image
        src="/images/bg-login-register.svg"
        alt="background image"
        layout="fill"
        objectFit="cover"
      />

      <h1 className="sr-only">Login</h1>

      <Glass className="space-y-8">
        <strong className="text-black text-5xl font-extrabold">
          Random Me.
        </strong>
        <LoginForm />
        <LoginSocialMedia />
        <ContinueAsGuest />
      </Glass>
    </div>
  )
}
