export enum RandomPolicy {
  EQUAL_WEIGHT,
  SOFTMAX,
  UCB,
  MULTINOMIAL,
}

export interface BanditArm {
  name: string
  bias: number
  pulls: number
  reward: number
}
