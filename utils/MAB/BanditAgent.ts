import { randomInt } from "crypto"
import { ArmState, ProbabilityOfEveryArm } from "types/mab"

const BanditAgent = {
  getRate: (pulls: number, reward: number) => {
    return pulls > 0 ? reward / pulls : 0
  },
  getRates: (states: ArmState[]) => {
    return states.map((state) => BanditAgent.getRate(...state))
  },
  utils: {
    argMaxOfNumbers: (rates: number[]) => {
      return rates.indexOf(Math.max(...rates))
    },
    getCurrentDecay: (t: number, start: number, end: number, gamma: number) => {
      const between = start * gamma ** t
      return between > end ? between : end
    },
  },
  policy: {
    equalWeight: (rates: number[]): ProbabilityOfEveryArm => {
      return rates.map(() => 1 / rates.length)
    },
    randomize: (rates: number[]): ProbabilityOfEveryArm => {
      const randomProbabilities = rates.map(() => randomInt(0, 101))
      const sum = randomProbabilities.reduce(
        (prev, current) => prev + current,
        0
      )
      return randomProbabilities.map((prob) => prob / sum)
    },
    epsilonGreedy: (
      states: ArmState[],
      t: number,
      startEpsilon: number = 0.3,
      endEpsilon: number = 0.1,
      gamma: number = 0.99
    ): ProbabilityOfEveryArm => {
      const rates = BanditAgent.getRates(states)
      const bestArmIndex = BanditAgent.utils.argMaxOfNumbers(rates)
      const p = Math.random()
      const epsilon = BanditAgent.utils.getCurrentDecay(
        t,
        startEpsilon,
        endEpsilon,
        gamma
      )

      if (p < epsilon) return BanditAgent.policy.equalWeight(rates)
      const probabilities = rates.map(() => 0)
      probabilities[bestArmIndex] = 1
      return probabilities
    },
    softmax: (
      states: ArmState[],
      t: number,
      startTemp: number = 0.1,
      endTemp: number = 0.001,
      gamma: number = 0.99
    ): ProbabilityOfEveryArm => {
      const rates = BanditAgent.getRates(states)
      const temperature = BanditAgent.utils.getCurrentDecay(
        t,
        startTemp,
        endTemp,
        gamma
      )
      // https://stackoverflow.com/a/42606665
      // prevent overflow of denominator
      const ratesOverTemp = rates.map((r) => r / temperature)
      const maxExpoPowers = Math.max(...ratesOverTemp)
      const normalizedExpoPowers = ratesOverTemp.map((r) => r - maxExpoPowers)
      const denominator = normalizedExpoPowers.reduce(
        (prev, current) => prev + Math.exp(current),
        0
      )
      return normalizedExpoPowers.map((p) => Math.exp(p) / denominator)
    },
    ucb: (states: ArmState[], t: number): ProbabilityOfEveryArm => {
      const selectedArmIndex = BanditAgent.utils.argMaxOfNumbers(
        states.map(
          ([pulls, reward]) =>
            BanditAgent.getRate(pulls, reward) +
            Math.sqrt((2 * Math.log(t)) / pulls)
        )
      )
      const probabilities = states.map(() => 0)
      probabilities[selectedArmIndex] = 1
      return probabilities
    },
    multinomial: (biases: number[]): ProbabilityOfEveryArm => {
      const biasSum = biases.reduce((prev, current) => prev + current, 0)
      return biases.map((b) => b / biasSum)
    },
  },
}

export default BanditAgent
