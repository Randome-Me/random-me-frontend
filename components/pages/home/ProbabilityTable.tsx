import { useTranslation, withTranslation } from "react-i18next"
import { getProbabilities } from "utils"

interface ProbabilityTableProps {
  probabilityInfo: ReturnType<typeof getProbabilities>
}

const ProbabilityTable = ({ probabilityInfo }: ProbabilityTableProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "home" })

  return (
    <div
      className="
    grid 
    items-center 
    text-center"
    >
      <h3
        className="
      capitalize 
      underline 
      decoration-wavy
    decoration-yellow-400"
      >
        {probabilityInfo.policyName}
      </h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">{t("probability")}</th>
            <th className="px-4 py-2">{t("option")}</th>
          </tr>
        </thead>
        <tbody className="font-medium">
          {probabilityInfo.armsWithProbability.map(({ arm, probability }) => (
            <tr key={arm._id} className="text-center">
              <td
                className="
              border 
              border-slate-800 
              px-4 
              py-2"
              >
                {(probability * 100).toFixed(2)}%
              </td>
              <td
                className="
              border 
              border-slate-800 
              px-4 
              py-2"
              >
                {arm.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default withTranslation()(ProbabilityTable)
