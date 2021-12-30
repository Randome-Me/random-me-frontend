import { Icon } from "@iconify/react"
import { useAppSelector, useAppDispatch } from "hooks"
import { FormEvent, useRef, useState } from "react"
import {
  setOptionWeight,
  setOptionName,
  removeOption,
  addOption,
} from "store/slice/user"
import { BanditArm } from "types/mab"

interface OptionsSectionProps {
  activeTopicId: string
}

export default function OptionsSection({ activeTopicId }: OptionsSectionProps) {
  const { topics } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const [addOptionText, setAddOptionText] = useState("")
  const weightInput = useRef<HTMLInputElement>(null)

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

  const editOptionName = (option: BanditArm) => {
    const name = window.prompt("Enter the new name", option.name)
    if (!name) return

    dispatch(
      setOptionName({ topicId: activeTopicId, optionId: option._id, name })
    )
  }

  const deleteOption = () => {
    dispatch(removeOption({ topicId: activeTopicId, optionId: activeTopicId }))
  }
  return (
    <div
      className="flex flex-col w-full text-center
              gap-y-12"
    >
      <h1 className="font-Sen font-bold">Options</h1>
      <div
        className="w-full bg-slate-50 text-cyan-600
                rounded-lg overflow-y-auto"
      >
        <form
          onSubmit={handleOptionSubmit}
          className="flex items-center space-x-4 px-4 h-16"
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
                    onClick={() => editOptionName(option)}
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
  )
}
