import { biasRange } from "utils/constants"

interface BiasInputDatalistProps {
  biasInputListId: string
}

const BiasInputDatalist = ({ biasInputListId }: BiasInputDatalistProps) => {
  return (
    <datalist id={biasInputListId}>
      {biasRange.map((bias) => (
        <option key={bias} value={bias} />
      ))}
    </datalist>
  )
}

export default BiasInputDatalist
