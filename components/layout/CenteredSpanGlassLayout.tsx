import Glass from "components/common/Glass"

interface CenteredSpanGlassLayoutProps {
  children?: React.ReactNode
  classNameOuter?: string
  classNameInner?: string
}

export default function CenteredSpanGlassLayout({
  children,
  classNameOuter,
  classNameInner,
}: CenteredSpanGlassLayoutProps) {
  return (
    <div
      className={`
          lg:my-10
          xl:px-[5%]
          ${classNameOuter || ""}`}
    >
      <Glass
        className={`
            p-4 py-6 md:p-10 lg:p-12
            lg:space-y-0
            xs:max-w-[95vw]
            mx-auto
            max-h-[90vh]
            overflow-y-auto
            ${classNameInner || ""}
            `}
      >
        {children}
      </Glass>
    </div>
  )
}
