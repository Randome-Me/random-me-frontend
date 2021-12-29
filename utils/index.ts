import { RandomPolicy } from "types/mab"

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
