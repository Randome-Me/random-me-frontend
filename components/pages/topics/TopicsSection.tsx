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

const TopicsSection = () => {
  const { topics, selectedTopicId } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { t } = useTranslation("translation", { keyPrefix: "topics" })

  const [addTopicText, setAddTopicText] = useState("")

  const handleTopicSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTopic({ name: addTopicText }))
    setAddTopicText("")
  }

  const editTopicName = () => {
    const name = window.prompt(
      t("editTopicNamePrompt"),
      topics.find((t) => t._id === selectedTopicId).name
    )
    if (!name) return

    dispatch(setTopicName({ topicId: selectedTopicId, name }))
  }

  const deleteTopic = () => {
    dispatch(removeTopic({ topicId: selectedTopicId }))
    dispatch(resetSelectedTopic())
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
      font-Sen font-bold"
      >
        {t("title")}
      </h1>
      <div
        className="
      bg-cyan-600 
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
              className="
                flex-1
                bg-transparent
                placeholder-slate-50/50
                border-0 border-b-2 border-slate-50/50
                focus:ring-transparent focus:border-slate-50
                caret-slate-50
                text-slate-100
              "
              placeholder={t("addTopicPlaceholder")}
            />
            <button type="submit">
              <Icon icon="akar-icons:plus" className="w-6 h-6 text-slate-50" />
            </button>
          </form>
        </div>
        {topics.map((topic) => (
          <div
            onClick={() => {
              dispatch(selectTopic({ topicId: topic._id }))
            }}
            key={topic._id}
            className={`
            w-full 
            text-left 
            text-lg 
            px-4 
            h-16 
            text-slate-50
            cursor-pointer 
            transition-colors 
            flex 
            items-center
            ${selectedTopicId === topic._id ? "bg-sky-100 text-cyan-600" : ""}`}
          >
            <span className="flex-1">
              {topic.name} ({topic.options.length})
            </span>
            {topic._id === selectedTopicId && (
              <div className="flex item-center gap-2">
                <Icon
                  onClick={() => editTopicName()}
                  className="
                  w-5 
                  h-5 
                  cursor-pointer
                hover:text-slate-800/50"
                  icon="clarity:edit-solid"
                />
                <Icon
                  onClick={(e) => {
                    deleteTopic()
                    e.stopPropagation()
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
