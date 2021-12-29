export enum RandomPolicy {
  EQUAL_WEIGHT,
  RANDOMIZE,
  EPSILON_GREEDY,
  SOFTMAX,
  UCB,
  MULTINOMIAL, // use user-provided option bias
}

export interface BanditArm {
  name: string
  bias: number
  pulls: number
  reward: number
}

export type ArmState = [number, number] // [pulls, reward]
export type ProbabilityOfEveryArm = number[]
