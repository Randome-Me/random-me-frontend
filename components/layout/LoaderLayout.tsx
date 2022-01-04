import BarWave from "components/common/BarWave"
import { useAppSelector } from "hooks"

interface LoaderLayoutProps {
  children: React.ReactNode
}

const LoaderLayout = ({ children }: LoaderLayoutProps) => {
  const { isLoading, loaderAfter, loaderBefore, loaderBackgroundOpacity } =
    useAppSelector((state) => state.app)

  return (
    <div>
      <div
        className={`
        fixed
        h-screen
        w-screen
        bg-cyan-300
        z-50
        flex
        flex-col
        justify-center
        items-center
        space-y-4 
        ${loaderBackgroundOpacity} 
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
