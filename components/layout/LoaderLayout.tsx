import BarWave from "components/common/BarWave"
import { useAppSelector } from "hooks"

interface LoaderLayoutProps {
  children: React.ReactNode
}

const LoaderLayout = ({ children }: LoaderLayoutProps) => {
  const { isLoading, loaderAfter, loaderBefore } = useAppSelector(
    (state) => state.app
  )

  return (
    <div>
      <div
        className={`
        fixed
        h-screen
        w-screen
        bg-cyan-300/50 dark:bg-gray-900/50
        z-50
        flex
        flex-col
        justify-center
        items-center
        space-y-4 
        ${isLoading ? "" : "hidden"}`}
        aria-hidden="true"
      >
        {loaderBefore}
        <BarWave
          color="rgb(250 204 21)" // yellow-400
          className="
          w-[3em]
        "
        />
        {loaderAfter}
      </div>
      {children}
    </div>
  )
}

export default LoaderLayout
