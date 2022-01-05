import { randomMe } from "utils"

const RandomMeButton = () => {
  return (
    <button
      onClick={randomMe}
      className="
    text-slate-50 hover:text-yellow-300
      text-shadow-lg active:text-shadow-none
      text-[2.5rem] sm:text-7xl
      font-Sen 
      font-extrabold 
      tracking-tighter
      underline
      decoration-slate-50 hover:decoration-yellow-300
      shadow-slate-50 
      transition-all 
      duration-300
      "
    >
      Random Me!
    </button>
  )
}

export default RandomMeButton
