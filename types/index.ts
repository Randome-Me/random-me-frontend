import { RandomPolicy, BanditArm } from "./mab"

export interface User {
  _id: string
  username: string
  topics: {
    name: string
    policy: RandomPolicy
    options: BanditArm[]
  }[]
  // maybe user-specific random policy configs here if they're configurable?
}

export const dumbUser: User = {
  _id: "dummyUserId",
  username: "dumbUser",
  topics: [
    {
      name: "topic1",
      policy: RandomPolicy.EQUAL_WEIGHT,
      options: [
        {
          name: "option1",
          bias: 1,
          pulls: 4,
          reward: 2,
        },
        {
          name: "option2",
          bias: 1,
          pulls: 47,
          reward: 10,
        },
        {
          name: "option3",
          bias: 4,
          pulls: 47,
          reward: 10,
        },
      ],
    },
    {
      name: "topic2",
      policy: RandomPolicy.SOFTMAX,
      options: [
        {
          name: "option1",
          bias: 1,
          pulls: 0,
          reward: 0,
        },
        {
          name: "option2",
          bias: 2,
          pulls: 10,
          reward: 0,
        },
      ],
    },
  ],
}
