import Glass from "components/common/Glass"
import Image from "next/image"
import LoginForm from "components/route/login/LoginForm"
import LoginSocialMedia from "components/route/login/LoginSocialMedia"
import ContinueAsGuest from "components/route/login/ContinueAsGuest"

export default function Login() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Image
        src="/images/bg-login-register.svg"
        alt="background image"
        layout="fill"
        objectFit="cover"
      />

      <h1 className="sr-only">Login</h1>

      <Glass className="p-[2rem] space-y-4 md:space-y-10 xs:p-10 sm:p-14">
        <strong
          className="text-black text-4xl sm:text-5xl font-extrabold 
        flex justify-center"
        >
          Random Me.
        </strong>
        <LoginForm />
        <LoginSocialMedia />
        <ContinueAsGuest />
      </Glass>
    </div>
  )
}
