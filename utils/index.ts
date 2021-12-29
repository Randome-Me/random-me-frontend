import { Arm } from "./MAB/Arm"
import store from "store"
import { RandomPolicy } from "types/mab"
import { getProbabilityOfEveryArm } from "./MAB"

export const decodePolicy = (policy: RandomPolicy) => {
  switch (policy) {
    case RandomPolicy.EQUAL_WEIGHT:
      return "equal weight"
    case RandomPolicy.RANDOMIZE:
      return "randomize"
    case RandomPolicy.EPSILON_GREEDY:
      return "epsilon greedy"
    case RandomPolicy.SOFTMAX:
      return "softmax"
    case RandomPolicy.UCB:
      return "ucb"
    case RandomPolicy.MULTINOMIAL:
      return "multinomial"
    default:
      throw new Error(`Unknown policy: ${policy}`)
  }
}

const choice = <T>(array: T[], probabilities: number[]) => {
  const rand = Math.random()
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += probabilities[i]
    if (sum >= rand) {
      return array[i]
    }
  }
  throw new Error("Should not reach here")
}

export const randomMe = () => {
  const {
    user: { selectedTopicId, topics },
  } = store.getState()
  const { options, t, policy } = topics.find(
    (topic) => topic._id === selectedTopicId
  )
  const arms = options.map((arm) => new Arm(arm))
  const states = arms.map((arm) => arm.state())

  const probabilityOfEveryArm = getProbabilityOfEveryArm(
    policy,
    states,
    t,
    arms
  )
  const selectedArm = choice(arms, probabilityOfEveryArm)
  const reward = confirm(
    `Selected ${selectedArm.name}\nDo you like this option?`
  )
  selectedArm.pull(reward ? 1 : 0)
}
