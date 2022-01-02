import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import ScreenCenterLayout from "components/layout/ScreenCenterLayout"
import { useAppSelector } from "hooks"
import Head from "next/head"
import Image from "next/image"
import { useTranslation, withTranslation } from "react-i18next"

const Account = () => {
  const user = useAppSelector((state) => state.user)
  const { t } = useTranslation("translation", { keyPrefix: "account" })

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
      </Head>

      <PageBackground src="/images/bg-account.svg">
        <LoggedInLayout>
          <ScreenCenterLayout>
            <Glass className="space-y-4">
              <div
                className="
              w-40 
              h-40 
              overflow-hidden 
              rounded-full
              border 
              mx-auto"
              >
                <Image
                  alt="Profile"
                  src="/images/default-profile.gif"
                  objectFit="cover"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1
                  className="
                font-Sen
                font-extrabold"
                >
                  {user.username}
                </h1>
                <a
                  href="#"
                  className="
                clickable-text-cyan
                text-sm block"
                >
                  {t("resetPassword")}
                </a>
              </div>
            </Glass>
          </ScreenCenterLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}

export default withTranslation()(Account)
