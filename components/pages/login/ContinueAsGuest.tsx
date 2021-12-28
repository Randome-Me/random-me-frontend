import { Icon } from "@iconify/react"

export default function ContinueAsGuest() {
  return (
    <span className="block text-center">
      or{" "}
      <a href="" className="clickable-text-teal mr-2">
        continue as guest
      </a>
      <a href="">
        <Icon
          icon="bi:info-circle-fill"
          className="inline clickable-text-teal"
        />
      </a>
    </span>
  )
}
