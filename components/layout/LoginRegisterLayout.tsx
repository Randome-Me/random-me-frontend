import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"

interface LoginRegisterLayoutProps {
  topic: "Login" | "Register"
  children: React.ReactNode
}

export default function LoginRegisterLayout({
  children,
  topic,
}: LoginRegisterLayoutProps) {
  return (
    <PageBackground src="/images/bg-login-register.svg">
      <div className="flex min-h-screen justify-center items-center">
        <h1 className="sr-only">{topic}</h1>
        <Glass className="p-[2rem] space-y-4 md:space-y-10 xs:p-10 sm:p-14">
          <strong
            className="text-black text-4xl sm:text-5xl font-extrabold
      font-Sen flex justify-center"
          >
            Random Me.
          </strong>
          {children}
        </Glass>
      </div>
    </PageBackground>
  )
}
