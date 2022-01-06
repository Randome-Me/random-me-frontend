import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import { useAppSelector } from "hooks"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import router from "next/router"
import { useEffect, useState } from "react"
import { useTranslation, withTranslation } from "react-i18next"
import store from "store"
import { hideLoader, showLoader } from "store/slice/app"
import { setUser } from "store/slice/user"
import {
  createNullUser,
  getPageTitle,
  loggedInUserDo,
  onPageMount,
} from "utils"
import { forgotPassword, logout } from "utils/axios/request/auth"
import { guestUserId, nullUserId } from "utils/constants"

const handleLogout = async () => {
  await loggedInUserDo(async () => {
    store.dispatch(showLoader())
    await logout()
    store.dispatch(hideLoader())
  })

  await router.replace("/login")
  store.dispatch(setUser(createNullUser()))
}

const handleResetPassword = async () => {
  store.dispatch(showLoader())
  try {
    const {
      data: { message },
    } = await forgotPassword(store.getState().user.email)
    alert(message)
  } catch (err) {
    alert(err.response.data.message)
  }
  store.dispatch(hideLoader())
}

const Account = () => {
  const user = useAppSelector((state) => state.user)
  const { t } = useTranslation("translation", { keyPrefix: "account" })

  const [pageContent, setPageContent] = useState(<div />)

  useEffect(() => {
    onPageMount()
  }, [])

  useEffect(() => {
    if (user._id !== nullUserId) {
      setPageContent(
        <Glass
          className="
              space-y-4 w-[27rem] max-w-[90vw]
              p-[1.4rem] py-6 md:p-10 lg:p-12"
        >
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
                  font-extrabold
                  dark:text-slate-50
                  text-center"
            >
              {user.username}
            </h1>
            {user._id !== guestUserId && (
              <span
                onClick={handleResetPassword}
                className="
                  clickable-text-cyan
                  text-sm block"
              >
                {t("resetPassword")}
              </span>
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
      )
    }
  }, [t, user._id, user.username])

  return (
    <>
      <Head>
        <title>{getPageTitle("account.title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={getPageTitle("account.title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <PageBackground
        dark="/images/bg-account-dark.svg"
        light="/images/bg-account.svg"
      >
        <LoggedInLayout>
          <div
            className="flex
            justify-center
            items-center
            h-full"
          >
            {pageContent}
          </div>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}

export default withTranslation()(Account)
