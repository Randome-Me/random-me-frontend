import { Icon } from "@iconify/react"
import { useAppSelector, useAppDispatch } from "hooks"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { addTopic, removeTopic, setTopicName } from "store/slice/user"

interface TopicsSectionProps {
  activeTopicId: string
  setActiveTopicId: Dispatch<SetStateAction<string>>
}

export default function TopicsSection({
  activeTopicId,
  setActiveTopicId,
}: TopicsSectionProps) {
  const { topics } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const [addTopicText, setAddTopicText] = useState("")

  const handleTopicSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTopic({ name: addTopicText }))
    setAddTopicText("")
  }

  const editTopicName = () => {
    const name = window.prompt(
      "Enter the new name",
      topics.find((t) => t._id === activeTopicId).name
    )
    if (!name) return

    dispatch(setTopicName({ topicId: activeTopicId, name }))
  }
  const deleteTopic = () => {
    dispatch(removeTopic({ topicId: activeTopicId }))
  }
  return (
    <div
      className="
      flex 
      flex-col 
      text-center
      space-y-4 xl:space-y-12"
    >
      <h1 className="font-Sen font-bold">Topics</h1>
      <div className="bg-cyan-600 rounded-lg overflow-hidden overflow-y-auto">
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
              placeholder="Add a topic"
            />
            <button type="submit">
              <Icon icon="akar-icons:plus" className="w-6 h-6 text-slate-50" />
            </button>
          </form>
        </div>
        {topics.map((topic) => (
          <div
            onClick={() => setActiveTopicId(topic._id)}
            key={topic._id}
            className={`w-full text-left text-lg px-4 h-16 text-slate-50
                          cursor-pointer transition-colors flex items-center
                        ${
                          activeTopicId === topic._id
                            ? "bg-sky-100 text-cyan-600"
                            : ""
                        }`}
          >
            <span className="flex-1">
              {topic.name} ({topic.options.length})
            </span>
            {topic._id === activeTopicId && (
              <div className="flex item-center gap-2">
                <Icon
                  onClick={() => editTopicName()}
                  className="w-5 h-5 cursor-pointer
                                  hover:text-slate-800/50"
                  icon="clarity:edit-solid"
                />
                <Icon
                  onClick={() => deleteTopic()}
                  className="w-5 h-5 cursor-pointer
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
