import { randomInt } from "crypto"
import { ArmState } from "./Arm"

type ProbabilityOfEveryArm = number[]

const BanditAgent = {
  getRate: (pulls: number, reward: number) => {
    return pulls > 0 ? reward / pulls : 0
  },
  getRates: (states: ArmState[]) => {
    return states.map((state) => BanditAgent.getRate(...state))
  },
  utils: {
    argMaxOfRates: (rates: number[]) => {
      return rates.indexOf(Math.max(...rates))
    },
  },
  policy: {
    equalWeight: (rates: number[]): ProbabilityOfEveryArm => {
      return rates.map(() => 1 / rates.length)
    },
    randomize: (rates: number[]): ProbabilityOfEveryArm => {
      const randomProbabilities = rates.map(() => randomInt(0, 101))
      return randomProbabilities.map((p) => p / 100)
    },
    epsilonGreedy: (
      states: ArmState[],
      epsilon: number
    ): ProbabilityOfEveryArm => {
      const rates = BanditAgent.getRates(states)
      const bestArmIndex = BanditAgent.utils.argMaxOfRates(rates)
      const p = Math.random()

      if (p < epsilon) return BanditAgent.policy.equalWeight(rates)
      const probabilities = rates.map(() => 0)
      probabilities[bestArmIndex] = 1
      return probabilities
    },
  },
}

export default BanditAgent
