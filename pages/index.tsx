import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import { useAppSelector } from "hooks"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RandomPolicy } from "types/mab"
import { getProbabilities } from "utils"
import { useTranslation } from "react-i18next"
import { withTranslation } from "react-i18next"
import ProbabilityTable from "components/pages/home/ProbabilityTable"
import { Topic } from "types"
import TopicsWithOptions from "components/pages/home/TopicsWithOptions"

const Home = () => {
  const { selectedTopicId, topics } = useAppSelector((state) => state.user)
  const { t } = useTranslation("translation", { keyPrefix: "home" })

  const [selectedPolicy, setSelectedPolicy] = useState<RandomPolicy>(
    topics.find((topic) => topic._id === selectedTopicId)?.policy
  )
  const [probabilityInfo, setProbabilityInfo] = useState(getProbabilities())
  const [showInfo, setShowInfo] = useState(false)
  const [topicsWithOptions, setTopicsWithOptions] = useState<Topic[]>(
    topics.filter((topic) => topic.options.length > 0)
  )

  useEffect(() => {
    setSelectedPolicy(
      topics.find((topic) => topic._id === selectedTopicId)?.policy
    )
    setProbabilityInfo(getProbabilities())
    setTopicsWithOptions(topics.filter((topic) => topic.options.length > 0))
  }, [topics, selectedTopicId])

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <PageBackground
        dark="/images/bg-index-dark.svg"
        light="/images/bg-index.svg"
      >
        <LoggedInLayout>
          <div
            className="
          flex
          lg:h-screen"
          >
            <Glass
              className="
                max-h-[90vh] 
                max-w-[90vw]
                overflow-y-auto
                transition-all 
                p-2 xs:p-6 sm:p-12 md:p-24
                mx-auto 
                lg:my-auto
                "
            >
              <main
                className="
              space-y-4
              md:space-y-10"
              >
                {topicsWithOptions.length > 0 && (
                  <TopicsWithOptions
                    selectedPolicy={selectedPolicy}
                    setShowInfo={setShowInfo}
                    topicsWithOptions={topicsWithOptions}
                    showInfo={showInfo}
                  />
                )}
                {topicsWithOptions.length === 0 && (
                  <>
                    <h4
                      className="
                      text-slate-50
                      "
                      dangerouslySetInnerHTML={{ __html: t("noTopics") }}
                    ></h4>
                    <br />
                    <Link href="/topics">
                      <a
                        className="
                      clickable-text-cyan
                      text-yellow-400
                      decoration-2
                      decoration-yellow-400
                      "
                      >
                        /topics
                      </a>
                    </Link>
                    <br />
                  </>
                )}
                {showInfo && (
                  <ProbabilityTable probabilityInfo={probabilityInfo} />
                )}
              </main>
            </Glass>
          </div>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}

export default withTranslation()(Home)
