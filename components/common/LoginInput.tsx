import { Icon } from "@iconify/react"
import { ChangeEventHandler } from "react"

interface LoginInputProps {
  value?: string | number | readonly string[]
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const minUsernameLength = 4
const maxUsernameLength = 16
const minPasswordLength = 8

const loginInputContainerClass =
  "w-full border-[1px] border-black-gray rounded flex justify-center items-center focus-within:border-teal-600 focus-within:ring-teal-600 overflow-hidden"
const loginInputIconClass = "mx-2 w-5 h-5 text-black-gray/75 hidden sm:inline"
const loginInputClass =
  "bg-transparent border-none flex-1 focus:ring-transparent focus:border-none"

export function LoginInputText({
  value,
  onChange,
  placeholder,
}: LoginInputProps) {
  return (
    <div className={loginInputContainerClass}>
      <Icon icon="bx:bx-user-circle" className={loginInputIconClass} />
      <input
        required
        minLength={minUsernameLength}
        maxLength={maxUsernameLength}
        value={value}
        placeholder={placeholder}
        type="text"
        className={loginInputClass}
        onChange={onChange}
      />
    </div>
  )
}

export function LoginInputPassword({
  onChange,
  placeholder,
  value,
}: LoginInputProps) {
  return (
    <div className={loginInputContainerClass}>
      <Icon icon="ri:lock-password-fill" className={loginInputIconClass} />
      <input
        required
        minLength={minPasswordLength}
        value={value}
        placeholder={placeholder}
        type="password"
        className={loginInputClass}
        onChange={onChange}
      />
    </div>
  )
}

export function LoginInputEmail({
  onChange,
  placeholder,
  value,
}: LoginInputProps) {
  return (
    <div className={loginInputContainerClass}>
      <Icon icon="eva:email-fill" className={loginInputIconClass} />
      <input
        required
        value={value}
        placeholder={placeholder}
        type="email"
        className={loginInputClass}
        onChange={onChange}
      />
    </div>
  )
}
