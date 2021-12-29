import { Icon } from "@iconify/react"
import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import { useAppDispatch, useAppSelector } from "hooks"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { changeTopicPolicy, selectTopic } from "store/slice/user"
import { RandomPolicy } from "types/mab"
import { decodePolicy } from "utils"

const policies: RandomPolicy[] = [
  RandomPolicy.EQUAL_WEIGHT,
  RandomPolicy.MULTINOMIAL,
  RandomPolicy.RANDOMIZE,
  RandomPolicy.SOFTMAX,
  RandomPolicy.UCB,
]

export default function Home() {
  const dispatch = useAppDispatch()
  const { selectedTopic, topics } = useAppSelector((state) => state.user)

  const [selectedPolicy, setSelectedPolicy] = useState<RandomPolicy>(
    topics.find((topic) => topic.name === selectedTopic).policy
  )

  useEffect(() => {
    setSelectedPolicy(
      topics.find((topic) => topic.name === selectedTopic).policy
    )
  }, [topics, selectedTopic])

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
        <div className="flex justify-center items-center h-screen">
          <Glass className="space-y-10">
            <button
              className="text-slate-50 text-shadow-lg text-8xl
                font-Sen font-extrabold hover:text-yellow-300 underline
                decoration-slate-50 hover:decoration-yellow-300
                active:text-shadow-none block shadow-slate-50 tracking-tight"
            >
              Random Me!
            </button>
            <div className="flex flex-col items-center">
              <div>
                <label className="flex item-center">
                  <h3
                    className="font-Sen 
                  translate-y-2
                  w-[7ch]"
                  >
                    Topics
                  </h3>
                  <select
                    onChange={(e) =>
                      dispatch(
                        selectTopic(
                          topics.find((t) => t.name === e.target.value).name
                        )
                      )
                    }
                    value={selectedTopic}
                    className="form-select"
                  >
                    {topics.map((topic) => (
                      <option key={topic.name} value={topic.name}>
                        {topic.name}
                      </option>
                    ))}
                  </select>
                  <button
                    className="
                    font-semibold
                    underline
                    hover:text-slate-700
                    ml-[1ch]"
                  >
                    add option
                  </button>
                </label>
                <label className="flex item-center">
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
                  <select
                    value={selectedPolicy}
                    onChange={(e) =>
                      dispatch(changeTopicPolicy(+e.target.value))
                    }
                    className="form-select"
                  >
                    {policies.map((policy) => (
                      <option key={policy} value={policy}>
                        {decodePolicy(policy)}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </Glass>
        </div>
      </PageBackground>
    </>
  )
}
