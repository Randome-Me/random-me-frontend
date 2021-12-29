import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

const routeMap = {
  "/": "Random Me",
  "/topics": "Topics",
  "/account": "Account",
  "/random-policies": "Random Policies",
}

export default function Sidebar() {
  const router = useRouter()
  const activeRoute = useRef(router.pathname)

  useEffect(() => {
    activeRoute.current = router.pathname
  }, [router])

  return (
    <aside className="space-y-2 transition-opacity inline-flex flex-col">
      <h2 className="text-sky-100">MENU</h2>
      <ul>
        {Object.keys(routeMap).map((route) => (
          <li key={route}>
            <Link href={route}>
              <a className="space-x-2">
                <div
                  className="before:content-['\200B'] inline-block w-[2px] 
                  h-full bg-sky-100 transition-colors"
                  aria-hidden="true"
                  style={
                    activeRoute.current === route
                      ? { backgroundColor: "rgb(250 204 21)" }
                      : {}
                  }
                />
                <span
                  className={`font-medium transition-colors
                  hover:text-yellow-300 ${
                    activeRoute.current === route
                      ? "text-yellow-400"
                      : "text-sky-100"
                  }`}
                >
                  {routeMap[route]}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
