import { Icon } from "@iconify/react"
import { useAppSelector, useAppDispatch } from "hooks"
import { FormEvent, useState } from "react"
import { useTranslation, withTranslation } from "react-i18next"
import {
  addTopic,
  removeTopic,
  resetSelectedTopic,
  selectTopic,
  setTopicName,
} from "store/slice/user"
import { loggedInUserDo, passedTextLimit, uuid } from "utils"
import {
  addTopicDB,
  removeTopicDB,
  resetSelectTopicDB,
  selectTopicDB,
  setTopicNameDB,
} from "utils/axios/request/database"
import { maxLengthTopicAndOptionText } from "utils/constants"

const TopicsSection = () => {
  const { topics, selectedTopicId } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { t } = useTranslation("translation", { keyPrefix: "topics" })

  const [addTopicText, setAddTopicText] = useState("")

  const handleTopicSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (addTopicText.trim() === "") {
      alert(t("emptyTopicAlert"))
      return
    }

    const newTopicId = uuid()
    dispatch(addTopic({ newTopicId, name: addTopicText }))
    loggedInUserDo(() => addTopicDB(newTopicId, addTopicText))

    setAddTopicText("")
  }

  const editTopicName = () => {
    const name = window.prompt(
      t("editTopicNamePrompt"),
      topics.find((t) => t._id === selectedTopicId).name
    )
    if (!name) return
    if (!passedTextLimit(name)) {
      alert(t("topicNameTooLong", { max: maxLengthTopicAndOptionText }))
      return
    }

    dispatch(setTopicName({ topicId: selectedTopicId, name }))
    loggedInUserDo(() => setTopicNameDB(selectedTopicId, name))
  }

  const deleteTopic = () => {
    dispatch(resetSelectedTopic())
    dispatch(removeTopic({ topicId: selectedTopicId }))
    loggedInUserDo(() => {
      resetSelectTopicDB()
      removeTopicDB(selectedTopicId)
    })
  }

  const handleSelectTopic = (topicId: string) => {
    if (topicId === selectedTopicId) return
    dispatch(selectTopic({ topicId }))
    loggedInUserDo(() => selectTopicDB(topicId))
  }

  return (
    <div
      className="
      flex 
      flex-col 
      text-center
      space-y-4 xl:space-y-12"
    >
      <h1
        className="
      font-Kanit 
      font-bold
      text-slate-50
      "
      >
        {t("title")}
      </h1>
      <div
        className="
      bg-cyan-600 dark:bg-slate-300 
      rounded-lg 
      overflow-hidden 
      overflow-y-auto"
      >
        <div>
          <form
            onSubmit={handleTopicSubmit}
            className="flex w-full items-center space-x-4 px-4
                    py-3"
          >
            <input
              value={addTopicText}
              onChange={(e) => setAddTopicText(e.target.value)}
              type="text"
              required
              maxLength={maxLengthTopicAndOptionText}
              className="
              w-full
                bg-transparent
                placeholder-slate-50/50 dark:placeholder:text-slate-500
                border-0 border-b-2 border-slate-50/50 dark:border-slate-800
                focus:ring-transparent focus:border-slate-50
                caret-slate-50 dark:caret-slate-800
                text-slate-100 dark:text-slate-800
              "
              placeholder={t("addTopicPlaceholder")}
            />
            <button type="submit">
              <Icon
                icon="akar-icons:plus"
                className="w-6 h-6 text-slate-50 dark:text-slate-800"
              />
            </button>
          </form>
        </div>
        {topics.map((topic) => (
          <div
            onClick={() => handleSelectTopic(topic._id)}
            key={topic._id}
            className={`
            w-full 
            text-left 
            text-lg 
            px-4 
            h-16 
            cursor-pointer 
            transition-colors 
            flex 
            items-center
            ${
              selectedTopicId === topic._id
                ? "bg-sky-100 dark:bg-slate-800 text-cyan-600 cursor-default dark:text-yellow-400"
                : "text-slate-50 dark:text-slate-800"
            }`}
          >
            <span className="flex-1">
              {topic.name} ({topic.options.length})
            </span>
            {topic._id === selectedTopicId && (
              <div className="flex item-center gap-2">
                <Icon
                  onClick={editTopicName}
                  className="
                  w-5 
                  h-5 
                  cursor-pointer
                hover:text-slate-800/50"
                  icon="clarity:edit-solid"
                />
                <Icon
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteTopic()
                  }}
                  className="
                  w-5 
                  h-5 
                  cursor-pointer
                  hover:text-slate-800/50"
                  icon="fluent:delete-24-filled"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default withTranslation()(TopicsSection)
