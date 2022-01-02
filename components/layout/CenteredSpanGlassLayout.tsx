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
          md:my-10
          xl:px-[5%]
          ${classNameOuter || ""}`}
    >
      <Glass
        className={`
            px-2 md:px-10 lg:px-12 xl:px-16
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
