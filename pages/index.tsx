import { Icon } from "@iconify/react"
import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import ScreenCenterLayout from "components/layout/ScreenCenterLayout"
import { useAppDispatch, useAppSelector } from "hooks"
import Head from "next/head"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { changeTopicPolicy, selectTopic } from "store/slice/user"
import { RandomPolicy } from "types/mab"
import { decodePolicy, getProbabilities, randomMe } from "utils"

const policies: RandomPolicy[] = [
  RandomPolicy.EQUAL_WEIGHT,
  RandomPolicy.MULTINOMIAL,
  RandomPolicy.RANDOMIZE,
  RandomPolicy.SOFTMAX,
  RandomPolicy.UCB,
]

export default function Home() {
  const dispatch = useAppDispatch()
  const { selectedTopicId, topics } = useAppSelector((state) => state.user)

  const [selectedPolicy, setSelectedPolicy] = useState<RandomPolicy>(
    topics.find((topic) => topic._id === selectedTopicId).policy
  )
  const [probabilityInfo, setProbabilityInfo] = useState(getProbabilities())
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    setSelectedPolicy(
      topics.find((topic) => topic._id === selectedTopicId).policy
    )
    setProbabilityInfo(getProbabilities())
  }, [topics, selectedTopicId])

  return (
    <>
      <Head>
        <title>Random | Random Me</title>
        <meta
          name="description"
          content="Let's randomize your life decisions with Multi-armed bandit policy!"
        />
      </Head>

      <PageBackground src="/images/bg-index.svg">
        <LoggedInLayout>
          <ScreenCenterLayout>
            <Glass
              className="space-y-10 max-h-[95vh] overflow-y-auto
            transition-all max-w-[95vw]
            px-2
            xs:px-10
            md:px-24"
            >
              <button
                onClick={randomMe}
                className="text-slate-50 text-shadow-lg 
                  font-Sen font-extrabold hover:text-yellow-300 underline
                  decoration-slate-50 hover:decoration-yellow-300
                  active:text-shadow-none block shadow-slate-50 tracking-tighter
                  transition-all duration-300
                  mx-auto
                  text-[2.5rem]
                  xs:text-5xl
                  sm:text-7xl
                  md:text-8xl"
              >
                Random Me!
              </button>
              <div className="flex flex-col items-center">
                <div>
                  <div className="flex item-center justify-center md:justify-start">
                    <h3
                      className="font-Sen
                    translate-y-2
                    w-[7ch]
                    hidden md:block"
                    >
                      Topics
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
                      {topics.map((topic) => (
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
                          add option
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
                            Policy
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
                        dispatch(changeTopicPolicy(+e.target.value))
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
                        className="rounded bg-transparent
                        text-yellow-600
                        focus:ring-0
                        focus:ring-offset-transparent
                        focus:ring-transparent
                      "
                      />
                      <span className="self-center font-semibold hover:text-slate-700">
                        see probabilities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {showInfo && (
                <div className="grid items-center text-center">
                  <h3
                    className="capitalize underline decoration-wavy
                decoration-yellow-400"
                  >
                    {probabilityInfo.policyName}
                  </h3>
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Probability</th>
                        <th className="px-4 py-2">Option</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium">
                      {probabilityInfo.armsWithProbability.map(
                        ({ arm, probability }) => (
                          <tr key={arm._id} className="text-center">
                            <td
                              className="
                          border border-slate-800 px-4 py-2"
                            >
                              {(probability * 100).toFixed(2)}%
                            </td>
                            <td
                              className="
                          border border-slate-800 px-4 py-2"
                            >
                              {arm.name}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </Glass>
          </ScreenCenterLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}
