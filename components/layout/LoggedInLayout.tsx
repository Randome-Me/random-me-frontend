import Sidebar from "components/common/Sidebar"

interface LoggedInLayoutProps {
  children?: React.ReactNode
}

export default function LoggedInLayout({ children }: LoggedInLayoutProps) {
  return (
    <>
      <div className="fixed inset-16">
        <Sidebar />
      </div>
      {children}
    </>
  )
}
