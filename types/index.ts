import { RandomPolicy, BanditArm } from "./mab"

export interface User {
  _id: string
  username: string
  selectedTopicId: string // the current selected topic
  topics: {
    _id: string
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
  selectedTopicId: "topic1",
  topics: [
    {
      _id: "topic1",
      name: "topic1",
      policy: RandomPolicy.EQUAL_WEIGHT,
      t: 4 + 47 + 27,
      options: [
        {
          _id: "option1",
          name: "option1",
          bias: 1,
          pulls: 4,
          reward: 2,
        },
        {
          _id: "option2",
          name: "option2",
          bias: 1,
          pulls: 47,
          reward: 10,
        },
        {
          _id: "option3",
          name: "option3",
          bias: 4,
          pulls: 27,
          reward: 10,
        },
      ],
    },
    {
      _id: "topic2",
      name: "topic2",
      policy: RandomPolicy.SOFTMAX,
      t: 0 + 10,
      options: [
        {
          _id: "option1",
          name: "option1",
          bias: 1,
          pulls: 0,
          reward: 0,
        },
        {
          _id: "option2",
          name: "option2",
          bias: 2,
          pulls: 10,
          reward: 0,
        },
      ],
    },
  ],
}
