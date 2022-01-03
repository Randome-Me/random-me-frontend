import { Topic } from "types"
import { ArmState, RandomPolicy } from "types/mab"
import { Arm } from "./Arm"
import {
  equalWeight,
  randomize,
  epsilonGreedy,
  softmax,
  ucb1,
  multinomial,
} from "./policy"

export const getProbabilityOfEveryArm = (
  policy: RandomPolicy,
  states: ArmState[],
  t: number,
  arms: Arm[]
) => {
  switch (policy) {
    case RandomPolicy.EQUAL_WEIGHT:
      return equalWeight(states)
    case RandomPolicy.RANDOMIZE:
      return randomize(states)
    case RandomPolicy.EPSILON_GREEDY:
      return epsilonGreedy(states, t)
    case RandomPolicy.SOFTMAX:
      return softmax(states, t)
    case RandomPolicy.UCB:
      return ucb1(states, t)
    case RandomPolicy.MULTINOMIAL:
      const biases = arms.map((arm) => arm.bias)
      return multinomial(biases)
    default:
      throw new Error(`Unknown policy: ${policy}`)
  }
}

export const createDefaultTopic = (name: string): Topic => {
  return {
    _id: Date.now() + "",
    name,
    options: [],
    policy: RandomPolicy.MULTINOMIAL,
    t: 0,
  }
}
