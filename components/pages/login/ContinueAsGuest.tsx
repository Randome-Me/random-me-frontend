import { Icon } from "@iconify/react"
import Link from "next/link"

export default function ContinueAsGuest() {
  return (
    <span className="block text-center">
      or{" "}
      <Link href="/">
        <a className="clickable-text-cyan mr-2">continue as guest</a>
      </Link>
      <a href="#">
        <Icon
          icon="bi:info-circle-fill"
          className="inline clickable-text-cyan"
        />
      </a>
    </span>
  )
}
