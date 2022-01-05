import { Icon } from "@iconify/react"
import { useAppDispatch, useAppSelector } from "hooks"
import Link from "next/link"
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react"
import { useTranslation, withTranslation } from "react-i18next"
import { changeTopicPolicy, selectTopic } from "store/slice/user"
import { Topic } from "types"
import { RandomPolicy } from "types/mab"
import { decodePolicy, loggedInUserDo } from "utils"
import {
  changeTopicPolicyDB,
  selectTopicDB,
} from "utils/axios/request/database"
import { policies } from "utils/constants"
import RandomMeButton from "./RandomMeButton"

interface TopicWithOptionsProps {
  topicsWithOptions: Topic[]
  setShowInfo: Dispatch<SetStateAction<boolean>>
  selectedPolicy: RandomPolicy
  showInfo: boolean
}

const TopicsWithOptions: FC<TopicWithOptionsProps> = ({
  topicsWithOptions,
  setShowInfo,
  selectedPolicy,
  showInfo,
}) => {
  const { t } = useTranslation("translation", { keyPrefix: "home" })
  const dispatch = useAppDispatch()
  const { selectedTopicId } = useAppSelector((state) => state.user)

  const handleSelectTopic = (e: ChangeEvent<HTMLSelectElement>) => {
    const topicId = e.target.value
    dispatch(selectTopic({ topicId }))
    loggedInUserDo(() => selectTopicDB(topicId))
  }

  const handleChangePolicy = (policy: RandomPolicy) => {
    dispatch(changeTopicPolicy(policy))
    loggedInUserDo(() => changeTopicPolicyDB(selectedTopicId, policy))
  }

  return (
    <>
      <RandomMeButton />
      <div className="flex flex-col items-center">
        <div>
          <div className="flex item-center justify-center md:justify-start">
            <h3
              className="font-Kanit
        translate-y-2
        w-[7ch]
        hidden md:block
        dark:text-slate-50"
            >
              {t("topics")}
            </h3>
            <select
              onChange={handleSelectTopic}
              value={selectedTopicId}
              className="
              form-select 
              max-w-[90%]
              "
            >
              {topicsWithOptions.map((topic) => (
                <option
                  className="bg-yellow-400 dark:bg-yellow-600"
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
              hover:decoration-yellow-500
              dark:text-slate-200 dark:hover:text-slate-100 dark:hover:decoration-yellow-400
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
                  className="font-Kanit
            underline
            hover:decoration-yellow-500
            dark:decoration-slate-200 
            dark:hover:decoration-yellow-400
            translate-y-2"
                >
                  <h3 className="w-[7ch] dark:text-slate-50">
                    {t("policy")}
                    <Icon icon="bi:info-circle-fill" className="inline w-3" />
                  </h3>
                </a>
              </Link>
            </div>
            <select
              value={selectedPolicy}
              onChange={(e) => handleChangePolicy(+e.target.value)}
              className="form-select max-w-[90%] self-center"
            >
              {policies.map((policy) => (
                <option
                  className="bg-yellow-400 dark:bg-yellow-600"
                  key={policy}
                  value={policy}
                >
                  {decodePolicy(policy)}
                </option>
              ))}
            </select>
            <div className="mx-auto md:my-auto md:ml-[1ch] space-x-2">
              <input
                id="showInfo"
                type="checkbox"
                onChange={() => setShowInfo(!showInfo)}
                className="
            my-checkbox
            cursor-pointer
            "
              />
              <label
                htmlFor="showInfo"
                className="
              self-center
              font-semibold
              cursor-pointer
              dark:text-slate-200 hover:text-slate-700"
              >
                {t("see probabilities")}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(TopicsWithOptions)
