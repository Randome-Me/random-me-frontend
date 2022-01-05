import { Icon } from "@iconify/react"
import { FC } from "react"

const GitHubRepos: FC = () => {
  const repos = {
    frontend: "https://github.com/Randome-Me/random-me-frontend",
    backend: "https://github.com/Randome-Me/random-me-backend",
  }

  return (
    <div className="flex lg:flex-col space-x-2 lg:space-x-0">
      {Object.keys(repos).map((name) => (
        <label
          key={name}
          className="
        inline-flex
        items-center
        justify-center
        text-sm
        space-x-1
        opacity-80 hover:opacity-100
      "
        >
          <Icon icon="akar-icons:github-fill" inline={true} />
          <a
            href={repos[name]}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {name}
          </a>
        </label>
      ))}
    </div>
  )
}

export default GitHubRepos
