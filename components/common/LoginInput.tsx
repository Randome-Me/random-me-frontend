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
  "w-full border-[1px] border-slate-800 dark:border-slate-400 rounded flex justify-center items-center focus-within:border-cyan-600 dark:focus-within:border-yellow-400 focus-within:ring-cyan-600 overflow-hidden"
const loginInputIconClass =
  "mx-2 w-5 h-5 text-slate-800/75 hidden sm:inline dark:text-slate-50 "
const loginInputClass =
  "bg-transparent border-none flex-1 focus:ring-transparent focus:border-none dark:placeholder:text-slate-500 dark:text-slate-50 dark:caret-slate-50"

export function LoginInputText({
  value,
  onChange,
  placeholder,
  ...rest
}: LoginInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={loginInputContainerClass}>
      <Icon icon="bx:bx-user-circle" className={loginInputIconClass} />
      <input
        {...rest}
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
  ...rest
}: LoginInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={loginInputContainerClass}>
      <Icon icon="ri:lock-password-fill" className={loginInputIconClass} />
      <input
        {...rest}
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
  ...rest
}: LoginInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={loginInputContainerClass}>
      <Icon icon="eva:email-fill" className={loginInputIconClass} />
      <input
        {...rest}
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
