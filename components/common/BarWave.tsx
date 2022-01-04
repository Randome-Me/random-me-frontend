interface BarWaveProps {
  className?: string
  color?: string
  width?: number | string
  height?: number | string
  duration?: string
}

const BarWave: React.FC<BarWaveProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2em",
  height = "1em",
  style,
  duration = "1s",
  ...others
}) => {
  return (
    <div
      {...others}
      style={{
        ...style,
        ["--width" as any]: width,
        ["--height" as any]: height,
        ["--color" as any]: color,
        ["--duration" as any]: duration,
      }}
      className={`cssfx-bar-wave ${className}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BarWave
