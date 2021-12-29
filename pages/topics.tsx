import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import ScreenCenterLayout from "components/layout/ScreenCenterLayout"
import Head from "next/head"
import { Icon } from "@iconify/react"
import { useAppDispatch, useAppSelector } from "hooks"
import { FormEvent, useRef, useState } from "react"
import {
  addOption,
  addTopic,
  removeOption,
  removeTopic,
  setOptionWeight,
  setTopicName,
} from "store/slice/user"
import { BanditArm } from "types/mab"

export default function Topics() {
  const { topics } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const [activeTopicId, setActiveTopicId] = useState(topics[0]?._id)
  const [addTopicText, setAddTopicText] = useState("")
  const [addOptionText, setAddOptionText] = useState("")
  const weightInput = useRef<HTMLInputElement>(null)

  const handleTopicSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTopic({ name: addTopicText }))
    setAddTopicText("")
  }

  const handleOptionSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addOption({ name: addOptionText, topicId: activeTopicId }))
    setAddOptionText("")
    weightInput.current.value = undefined
  }

  const editWeight = (option: BanditArm) => {
    let weight: string | number = window.prompt(
      "Enter the new weight",
      option.bias + ""
    )
    if (!weight) return

    if (isNaN(Number(weight))) {
      alert("Please enter a number")
      return
    }

    weight = Number(weight)
    if (weight < 1 || weight > 10) {
      alert("Please enter a number between 1 and 10")
      return
    }

    dispatch(
      setOptionWeight({
        topicId: activeTopicId,
        optionId: option._id,
        weight: Number(weight),
      })
    )
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

  const deleteOption = () => {
    dispatch(removeOption({ topicId: activeTopicId, optionId: activeTopicId }))
  }

  return (
    <>
      <Head>
        <title>Topics | Random Me</title>
        <meta
          name="description"
          content="See all the topics and options that you can choose to random from. You can edit, add, or delete them here."
        />
      </Head>

      <PageBackground src="/images/bg-topics.svg">
        <LoggedInLayout>
          <ScreenCenterLayout>
            <Glass className="flex w-[69rem] h-4/5">
              <div
                className="flex flex-col w-[40rem] text-center
              gap-y-12"
              >
                <h1 className="">Topics</h1>
                <div className="bg-cyan-600">
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
                        <Icon
                          icon="akar-icons:plus"
                          className="w-6 h-6 text-slate-50"
                        />
                      </button>
                    </form>
                  </div>
                  {topics.map((topic) => (
                    <div
                      onClick={() => setActiveTopicId(topic._id)}
                      key={topic._id}
                      className={`w-full text-left text-lg px-4 py-4 text-slate-50
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
              <div
                className="flex flex-col w-full text-center
              gap-y-12"
              >
                <h1 className="">Options</h1>
                <div className="w-full bg-slate-50 text-cyan-600">
                  <form
                    onSubmit={handleOptionSubmit}
                    className="flex items-center space-x-4 px-4
                    py-3"
                  >
                    <input
                      type="number"
                      ref={weightInput}
                      min={1}
                      max={10}
                      required
                      className="
                          w-[7rem]
                          bg-transparent
                          placeholder:text-cyan-800/75
                          border-0 border-b-2 border-slate-500/75
                          focus:ring-transparent focus:border-slate-500
                        "
                      placeholder="Weight"
                    />
                    <input
                      value={addOptionText}
                      onChange={(e) => setAddOptionText(e.target.value)}
                      type="text"
                      className="
                          flex-1
                          bg-transparent
                          placeholder:text-cyan-800/75
                          border-0 border-b-2 border-slate-500/75
                          focus:ring-transparent focus:border-slate-500
                        "
                      placeholder="Add an option"
                    />
                    <button type="submit">
                      <Icon
                        icon="akar-icons:plus"
                        className="w-6 h-6 text-slate-800/75"
                      />
                    </button>
                  </form>
                  {topics
                    .find((t) => t._id === activeTopicId)
                    ?.options.map((option) => {
                      return (
                        <form
                          key={option._id}
                          className="flex items-center space-x-4 px-4
                      py-3
                      even:bg-sky-100"
                        >
                          <div className="flex w-[7rem] items-center">
                            <input
                              type="number"
                              value={option.bias}
                              onChange={(e) => {}}
                              min={1}
                              max={10}
                              disabled
                              className="
                                    bg-transparent
                                  placeholder:text-cyan-800/75
                                    border-0 border-b-2 border-slate-500/75
                                    focus:ring-transparent focus:border-slate-500
                                    disabled:border-0"
                            />
                            <Icon
                              onClick={() => editWeight(option)}
                              className="w-5 h-5 cursor-pointer text-slate-800/75
                                hover:text-slate-800/50"
                              icon="clarity:edit-solid"
                            />
                          </div>
                          <input
                            type="text"
                            value={option.name}
                            disabled
                            className="
                        flex-1
                        bg-transparent
                        placeholder:text-cyan-800/75
                        border-0 border-b-2 border-slate-500/75
                        focus:ring-transparent focus:border-slate-500
                        disabled:border-0
                      "
                          />
                          <div
                            className="flex item-center text-slate-800/75
                      space-x-2"
                          >
                            <Icon
                              onClick={() => {}}
                              className="w-5 h-5 cursor-pointer 
                          hover:text-slate-800/50"
                              icon="clarity:edit-solid"
                            />
                            <Icon
                              onClick={() => deleteOption()}
                              className="w-5 h-5 cursor-pointer 
                          hover:text-slate-800/50"
                              icon="fluent:delete-24-filled"
                            />
                          </div>
                        </form>
                      )
                    })}
                </div>
              </div>
            </Glass>
          </ScreenCenterLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}
