import { Icon } from "@iconify/react"
import { FC } from "react"
import { goDark, goLight } from "utils"
import LanguageSwitch from "./LanguageSwitch"

const ThemeAndLanguageSwitch: FC = () => {
  return (
    <div
      className="
        hidden lg:flex
        justify-center
        items-center
        lg:pt-[2rem]
        mb-[2rem] lg:mb-0
        "
    >
      <Icon
        onClick={goDark}
        className="
      inline-block
      dark:hidden
      w-6
      h-6
      cursor-pointer
      text-white
      hover:stroke-slate-50
      hover:stroke-1
      "
        icon="bx:bx-sun"
      />
      <Icon
        onClick={goLight}
        className="
      hidden
      dark:inline-block
      w-6
      h-6
      cursor-pointer
      text-white
      hover:stroke-slate-50
      hover:stroke-1
      "
        icon="bx:bxs-moon"
      />
      <div className="ml-4">
        <LanguageSwitch />
      </div>
    </div>
  )
}

export default ThemeAndLanguageSwitch
