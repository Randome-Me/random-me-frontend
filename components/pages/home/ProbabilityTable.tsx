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
      decoration-double
    decoration-yellow-500
    hover:decoration-yellow-400
    dark:text-slate-50"
      >
        {probabilityInfo.policyName}
      </h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th
              className="
            px-4 py-2 
            hover:text-yellow-500
            dark:text-slate-200 dark:hover:text-yellow-400"
            >
              {t("probability")}
            </th>
            <th
              className="
            px-4 py-2 
            hover:text-yellow-500
            dark:text-slate-200 dark:hover:text-yellow-400"
            >
              {t("option")}
            </th>
          </tr>
        </thead>
        <tbody className="font-medium">
          {probabilityInfo.armsWithProbability.map(({ arm, probability }) => (
            <tr key={arm._id} className="text-center">
              <td
                className="
              border 
              border-slate-800 dark:border-slate-200
              dark:text-slate-200
              px-4 
              py-2"
              >
                {(probability * 100).toFixed(2)}%
              </td>
              <td
                className="
              border 
              border-slate-800 dark:border-slate-200
              dark:text-slate-200
              px-4 
              py-2
              max-w-[10rem] sm:max-w-[16rem] md:max-w-[24rem] lg:max-w-[32rem]
              break-words"
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
