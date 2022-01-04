import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import ScreenCenterLayout from "components/layout/ScreenCenterLayout"
import { useAppDispatch, useAppSelector } from "hooks"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation, withTranslation } from "react-i18next"
import { hideLoader, showLoader } from "store/slice/app"
import { setUser } from "store/slice/user"
import { createNullUser } from "utils"
import { logout } from "utils/axios/request/auth"
import { guestUserId } from "utils/constants"

const Account = () => {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { t } = useTranslation("translation", { keyPrefix: "account" })
  const router = useRouter()

  const handleLogout = async () => {
    if (user._id !== guestUserId) {
      dispatch(showLoader())
      await logout()
      dispatch(hideLoader())
    }

    await router.replace("/login")
    dispatch(setUser(createNullUser()))
  }

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
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
                {user._id !== guestUserId && (
                  <a
                    href="#"
                    className="
                clickable-text-cyan
                text-sm block"
                  >
                    {t("resetPassword")}
                  </a>
                )}
              </div>
              {user._id === guestUserId ? (
                <div>
                  <Link href="/login">
                    <a>
                      <button
                        className="
                      login-register-button mt-2 uppercase
                      "
                      >
                        {t("login")}
                      </button>
                    </a>
                  </Link>
                  <Link href="/register">
                    <a>
                      <button
                        className="
                      login-register-button mt-2 uppercase
                      "
                      >
                        {t("register")}
                      </button>
                    </a>
                  </Link>
                </div>
              ) : (
                <button
                  onClick={handleLogout}
                  className="
              login-register-button uppercase
              "
                >
                  {t("logout")}
                </button>
              )}
            </Glass>
          </ScreenCenterLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}

export default withTranslation()(Account)
