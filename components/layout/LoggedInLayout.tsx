import Sidebar from "components/common/Sidebar"

interface LoggedInLayoutProps {
  children?: React.ReactNode
}

export default function LoggedInLayout({ children }: LoggedInLayoutProps) {
  return (
    <>
      <div className="absolute inset-16">
        <Sidebar />
      </div>
      {children}
    </>
  )
}
