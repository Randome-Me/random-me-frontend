import Link from "next/link"
import { useRouter } from "next/router"

interface SidebarProps {
  routeMap: {
    [path: string]: string
  }
}

export default function Sidebar({ routeMap }: SidebarProps) {
  const { pathname: currentPath } = useRouter()

  return (
    <aside
      className="
      space-y-2 
      transition-opacity
      inline-flex
      flex-col"
    >
      <h2 className="text-sky-100">MENU</h2>
      <ul>
        {Object.keys(routeMap).map((route) => (
          <li key={route}>
            <Link href={route}>
              <a className="space-x-2 flex">
                <div
                  className="
                  before:content-['\200B'] 
                  inline-block w-[2px] 
                  h-full 
                  bg-sky-100 
                  transition-colors"
                  aria-hidden="true"
                  style={
                    currentPath === route
                      ? { backgroundColor: "rgb(250 204 21)" }
                      : {}
                  }
                />
                <div
                  className={`
                  font-medium 
                  transition-colors
                  hover:text-yellow-300 
                  ${
                    currentPath === route ? "text-yellow-400" : "text-sky-100"
                  }`}
                >
                  {routeMap[route]}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
