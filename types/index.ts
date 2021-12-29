import { RandomPolicy, BanditArm } from "./mab"

export interface User {
  _id: string
  username: string
  selectedTopic: string // the current selected topic
  topics: {
    name: string
    policy: RandomPolicy
    t: number
    options: BanditArm[]
  }[]
  // maybe user-specific random policy configs here if they're configurable?
}

export const dumbUser: User = {
  _id: "dummyUserId",
  username: "dumbUser",
  selectedTopic: "topic1",
  topics: [
    {
      name: "topic1",
      policy: RandomPolicy.EQUAL_WEIGHT,
      t: 4 + 47 + 27,
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
          pulls: 27,
          reward: 10,
        },
      ],
    },
    {
      name: "topic2",
      policy: RandomPolicy.SOFTMAX,
      t: 0 + 10,
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
