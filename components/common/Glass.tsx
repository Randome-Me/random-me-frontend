export type GlassProps = {
  children: React.ReactNode
  className?: string
}

export default function Glass({ children, className }: GlassProps) {
  return (
    <div
      className={`
      bg-gradient-to-br 
      from-[#F7FAFC]/10 to-[#F7FAFC]/5 
      dark:from-slate-500/20 dark:to-slate-500/5
      p-12 
      backdrop-blur-sm 
      shadow-md hover:shadow-lg
      rounded-xl
      ${className || ""}`}
    >
      {children}
    </div>
  )
}
