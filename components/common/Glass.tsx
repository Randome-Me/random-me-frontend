export type GlassProps = {
  children: React.ReactNode
  className?: string
}

export default function Glass({ children, className }: GlassProps) {
  return (
    <div
      className={`bg-gradient-to-br from-white/40 to-white/30 p-12 
      backdrop-blur-sm 
      shadow-md hover:shadow-lg
      rounded-xl
      ${className || ""}`}
    >
      {children}
    </div>
  )
}
