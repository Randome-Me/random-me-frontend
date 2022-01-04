import { Icon } from "@iconify/react"
import { useAppSelector, useAppDispatch } from "hooks"
import { FormEvent, useRef, useState } from "react"
import { useTranslation, withTranslation } from "react-i18next"
import {
  setOptionBias,
  setOptionName,
  removeOption,
  addOption,
} from "store/slice/user"
import { BanditArm } from "types/mab"
import { uuid } from "utils"
import {
  addOptionDB,
  removeOptionDB,
  setOptionBiasDB,
  setOptionNameDB,
} from "utils/axios/request/database"
import { guestUserId, maxBias, minBias } from "utils/constants"
import BiasInputDatalist from "./BiasInputDatalist"

const OptionsSection = () => {
  const {
    topics,
    selectedTopicId,
    _id: userId,
  } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { t } = useTranslation("translation", { keyPrefix: "topics" })

  const [addOptionText, setAddOptionText] = useState("")
  const biasInput = useRef<HTMLInputElement>(null)

  const biasInputListId = "bias-input-datalist"

  const handleOptionSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let bias = biasInput.current.valueAsNumber
    if (isNaN(bias)) {
      bias = undefined
    }

    if (addOptionText.trim() === "") {
      alert(t("emptyOptionAlert"))
      return
    }

    let optionId: string

    if (userId === guestUserId) {
      optionId = uuid()
    } else {
      const {
        data: { _id },
      } = await addOptionDB(selectedTopicId, addOptionText, bias)
      optionId = _id
    }

    dispatch(
      addOption({
        topicId: selectedTopicId,
        optionId,
        name: addOptionText,
        bias,
      })
    )

    setAddOptionText("")
    biasInput.current.value = undefined
  }

  const editWeight = async (option: BanditArm) => {
    let bias: string | number = window.prompt(
      t("editWeightPrompt"),
      option.bias + ""
    )
    if (!bias) return

    bias = parseInt(bias)
    if (isNaN(bias) || bias < minBias || bias > maxBias) {
      alert(t("biasOutOfRange", { max: maxBias, min: minBias }))
      return
    }

    if (userId !== guestUserId) {
      await setOptionBiasDB(selectedTopicId, option._id, bias)
    }
    dispatch(
      setOptionBias({
        topicId: selectedTopicId,
        optionId: option._id,
        weight: bias,
      })
    )
  }

  const editOptionName = async (option: BanditArm) => {
    const { name: oldName, _id: optionId } = option

    const name = window.prompt(t("editOptionNamePrompt"), oldName)
    if (!name) return

    if (userId !== guestUserId) {
      await setOptionNameDB(selectedTopicId, optionId, name)
    }
    dispatch(setOptionName({ topicId: selectedTopicId, optionId, name }))
  }

  const deleteOption = async (optionId: string) => {
    if (userId !== guestUserId) {
      await removeOptionDB(selectedTopicId, optionId)
    }
    dispatch(removeOption({ topicId: selectedTopicId, optionId }))
  }

  return (
    <>
      {topics.length > 0 && selectedTopicId !== null && (
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
            {t("options")}
          </h1>
          <div
            className="
        w-full 
        bg-slate-50 
        text-cyan-600
        rounded-lg 
        overflow-y-auto"
          >
            <form
              onSubmit={handleOptionSubmit}
              className="
          flex 
          items-center 
          space-x-2 sm:space-x-4 
          px-4 
          h-16"
            >
              <input
                type="number"
                ref={biasInput}
                min={minBias}
                max={maxBias}
                list={biasInputListId}
                className="
              w-[8ch]
              bg-transparent
              placeholder:text-cyan-800/75
              border-0 border-b-2 border-slate-500/75
              focus:ring-transparent focus:border-slate-500
              "
                placeholder={minBias + ""}
              />
              <BiasInputDatalist biasInputListId={biasInputListId} />
              <input
                value={addOptionText}
                onChange={(e) => setAddOptionText(e.target.value)}
                type="text"
                required
                className="
              w-[10rem]
              xs:flex-1
              bg-transparent
              placeholder:text-cyan-800/75
              border-0 border-b-2 border-slate-500/75
              focus:ring-transparent focus:border-slate-500
            "
                placeholder={t("addOptionPlaceholder")}
              />
              <button type="submit">
                <Icon
                  icon="akar-icons:plus"
                  className="w-6 h-6 text-slate-800/75"
                />
              </button>
            </form>
            {topics
              .find((t) => t._id === selectedTopicId)
              ?.options.map((option) => {
                return (
                  <form
                    key={option._id}
                    className="
                flex 
                items-center 
                space-x-4 
                px-4
                py-3
              even:bg-sky-100"
                  >
                    <div className="flex items-center gap-3">
                      <span>{option.bias}</span>
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
                    w-[10rem]
                    xs:flex-1
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
                        onClick={() => deleteOption(option._id)}
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
      )}
    </>
  )
}

export default withTranslation()(OptionsSection)
