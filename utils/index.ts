import { Arm } from "./MAB/Arm"
import store from "store"
import { RandomPolicy } from "types/mab"
import { getProbabilityOfEveryArm } from "./MAB/BanditAgent"

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

export const randomMe = () => {
  const {
    user: { selectedTopic, topics },
  } = store.getState()
  const { options, t, policy } = topics.find((t) => t._id === selectedTopic)
  const arms = options.map((arm) => new Arm(arm))
  const states = arms.map((arm) => arm.state())

  const probabilityOfEveryArm = getProbabilityOfEveryArm(
    policy,
    states,
    t,
    arms
  )

  console.log(probabilityOfEveryArm)
}
