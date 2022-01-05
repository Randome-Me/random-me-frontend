import GitHubRepos from "components/common/GitHubRepos"
import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import ThemeAndLanguageSwitch from "components/common/ThemeAndLanguageSwitch"

interface LoginRegisterLayoutProps {
  topic: string
  children: React.ReactNode
}

export default function LoginRegisterLayout({
  children,
  topic,
}: LoginRegisterLayoutProps) {
  return (
    <PageBackground
      dark="/images/bg-login-register-dark.svg"
      light="/images/bg-login-register.svg"
    >
      <div
        className="
        fixed
        bottom-4
        left-4
        space-y-4
        "
      >
        <GitHubRepos />
        <ThemeAndLanguageSwitch />
      </div>
      <div
        className="
      h-screen
      w-screen
      flex
      "
      >
        <div className="lg:w-[27rem] mx-auto my-auto">
          <h1 className="sr-only">{topic}</h1>
          <main>
            <Glass
              className="
              p-[2rem] xs:p-10 sm:p-14
              space-y-4 md:space-y-10
              "
            >
              <strong
                className="
                  text-slate-700 dark:text-yellow-400
                  text-4xl
                  sm:text-5xl
                  font-extrabold
                  font-Sen
                  flex
                  justify-center
                  "
              >
                Random Me.
              </strong>
              {children}
            </Glass>
          </main>
        </div>
      </div>
    </PageBackground>
  )
}
