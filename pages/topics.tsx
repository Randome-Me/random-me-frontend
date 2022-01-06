import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import Head from "next/head"
import TopicsSection from "components/pages/topics/TopicsSection"
import OptionsSection from "components/pages/topics/OptionsSection"
import CenteredSpanGlassLayout from "components/layout/CenteredSpanGlassLayout"
import { useTranslation, withTranslation } from "react-i18next"
import { useAppSelector } from "hooks"
import { useEffect } from "react"
import { onPageMount } from "utils"

const Topics = () => {
  const { t } = useTranslation("translation", { keyPrefix: "topics" })
  const { selectedTopicId } = useAppSelector((state) => state.user)

  useEffect(() => {
    onPageMount()
  }, [])

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <PageBackground
        dark="/images/bg-topics-dark.svg"
        light="/images/bg-topics.svg"
      >
        <LoggedInLayout>
          <CenteredSpanGlassLayout
            classNameInner="
          xl:grid
          xl:grid-cols-5
          space-y-4"
          >
            <div className="col-span-2">
              <TopicsSection />
            </div>
            {selectedTopicId && (
              <div className="col-span-3">
                <OptionsSection />
              </div>
            )}
          </CenteredSpanGlassLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}

export default withTranslation()(Topics)
