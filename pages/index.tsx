import { Icon } from "@iconify/react"
import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import { useAppDispatch, useAppSelector } from "hooks"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { changeTopicPolicy, selectTopic } from "store/slice/user"
import { RandomPolicy } from "types/mab"
import { decodePolicy, getProbabilities } from "utils"
import { useTranslation } from "react-i18next"
import { withTranslation } from "react-i18next"
import RandomMeButton from "components/pages/home/RandomMeButton"
import ProbabilityTable from "components/pages/home/ProbabilityTable"
import { Topic } from "types"
import { changeTopicPolicyDB } from "utils/axios/request/database"
import { guestUserId } from "utils/constants"

const policies: RandomPolicy[] = [
  RandomPolicy.MULTINOMIAL,
  RandomPolicy.EQUAL_WEIGHT,
  RandomPolicy.RANDOMIZE,
  RandomPolicy.UCB,
  RandomPolicy.EPSILON_GREEDY,
  RandomPolicy.SOFTMAX,
]

const Home = () => {
  const dispatch = useAppDispatch()
  const {
    selectedTopicId,
    topics,
    _id: userId,
  } = useAppSelector((state) => state.user)
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

  const handleChangePolicy = async (policy: RandomPolicy) => {
    if (userId !== guestUserId) {
      await changeTopicPolicyDB(selectedTopicId, policy)
    }
    dispatch(changeTopicPolicy(policy))
  }

  return (
    <>
      <Head>
        <title>{t("title")} | Random Me</title>
        <meta name="description" content={t("description")} />
      </Head>

      <PageBackground src="/images/bg-index.svg">
        <LoggedInLayout>
          <div
            className="
          flex
          lg:h-screen"
          >
            <Glass
              className="
                max-h-[95vh] 
                max-w-[95vw]
                overflow-y-auto
                transition-all 
                px-2
                mx-auto 
                lg:my-auto
                xs:px-10
                md:px-24"
            >
              <main className="space-y-10">
                {topicsWithOptions.length > 0 && (
                  <>
                    <RandomMeButton />
                    <div className="flex flex-col items-center">
                      <div>
                        <div className="flex item-center justify-center md:justify-start">
                          <h3
                            className="font-Sen
                          translate-y-2
                          w-[7ch]
                          hidden md:block"
                          >
                            {t("topics")}
                          </h3>
                          <select
                            onChange={(e) =>
                              dispatch(
                                selectTopic({
                                  topicId: e.target.value,
                                })
                              )
                            }
                            value={selectedTopicId}
                            className="form-select max-w-[90%]"
                          >
                            {topicsWithOptions.map((topic) => (
                              <option
                                className="bg-yellow-500"
                                key={topic._id}
                                value={topic._id}
                              >
                                {topic.name}
                              </option>
                            ))}
                          </select>
                          <div className="hidden md:flex">
                            <Link href="/topics">
                              <a
                                className="
                                self-center
                                font-semibold
                                underline
                                hover:text-slate-700
                                ml-[1ch]"
                              >
                                {t("add option")}
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center md:flex-row item-center">
                          <div className="hidden md:flex">
                            <Link href="/random-policies">
                              <a
                                className="font-Sen
                              underline
                              translate-y-2"
                              >
                                <h3 className="w-[7ch]">
                                  {t("policy")}
                                  <Icon
                                    icon="bi:info-circle-fill"
                                    className="inline w-3"
                                  />
                                </h3>
                              </a>
                            </Link>
                          </div>
                          <select
                            value={selectedPolicy}
                            onChange={(e) =>
                              handleChangePolicy(+e.target.value)
                            }
                            className="form-select max-w-[90%] self-center"
                          >
                            {policies.map((policy) => (
                              <option
                                className="bg-yellow-500"
                                key={policy}
                                value={policy}
                              >
                                {decodePolicy(policy)}
                              </option>
                            ))}
                          </select>
                          <div className="mx-auto md:my-auto md:ml-[1ch] space-x-2">
                            <input
                              type="checkbox"
                              onChange={() => setShowInfo(!showInfo)}
                              className="
                              my-checkbox
                              "
                            />
                            <span className="self-center font-semibold hover:text-slate-700">
                              {t("see probabilities")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
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
