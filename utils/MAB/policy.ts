import { ArmState, ProbabilityOfEveryArm } from "types/mab"

const getRate = (pulls: number, reward: number) => {
  return pulls > 0 ? reward / pulls : 0
}

const getRates = (states: ArmState[]) => {
  return states.map((state) => getRate(...state))
}

const argMaxOfNumbers = (numArray: number[]) => {
  return numArray.indexOf(Math.max(...numArray))
}

const getCurrentDecay = (
  t: number,
  start: number,
  end: number,
  gamma: number
) => {
  const between = start * gamma ** t
  return between > end ? between : end
}

export const equalWeight = (states: ArmState[]): ProbabilityOfEveryArm => {
  return states.map(() => 1 / states.length)
}

export const randomize = (states: ArmState[]): ProbabilityOfEveryArm => {
  const randomProbabilities = states.map(() => Math.random())
  const sum = randomProbabilities.reduce((prev, current) => prev + current, 0)
  return randomProbabilities.map((prob) => prob / sum)
}

export const epsilonGreedy = (
  states: ArmState[],
  t: number,
  startEpsilon: number = 0.3,
  endEpsilon: number = 0.1,
  gamma: number = 0.99
): ProbabilityOfEveryArm => {
  const p = Math.random()
  const epsilon = getCurrentDecay(t, startEpsilon, endEpsilon, gamma)
  if (p > epsilon) return equalWeight(states)

  const rates = getRates(states)
  const bestArmIndex = argMaxOfNumbers(rates)
  const probabilities = rates.map(() => 0)
  probabilities[bestArmIndex] = 1
  return probabilities
}

export const softmax = (
  states: ArmState[],
  t: number,
  startTemp: number = 0.1,
  endTemp: number = 0.001,
  gamma: number = 0.99
): ProbabilityOfEveryArm => {
  const rates = getRates(states)
  const temperature = getCurrentDecay(t, startTemp, endTemp, gamma)
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
}

export const ucb = (states: ArmState[], t: number): ProbabilityOfEveryArm => {
  const selectedArmIndex = argMaxOfNumbers(
    states.map(
      ([pulls, reward]) =>
        getRate(pulls, reward) + Math.sqrt((2 * Math.log(t)) / pulls)
    )
  )
  const probabilities = states.map(() => 0)
  probabilities[selectedArmIndex] = 1
  return probabilities
}

export const multinomial = (biases: number[]): ProbabilityOfEveryArm => {
  const biasSum = biases.reduce((prev, current) => prev + current, 0)
  return biases.map((b) => b / biasSum)
}
