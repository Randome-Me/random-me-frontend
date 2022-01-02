import { Arm } from "./MAB/Arm"
import store from "store"
import { RandomPolicy } from "types/mab"
import { getProbabilityOfEveryArm } from "./MAB"
import i18n from "locales"
import { t as translate } from "i18next"

export const switchLanguage = () => {
  i18n.changeLanguage(
    {
      en: "th",
      th: "en",
    }[i18n.language]
  )
}

export const decodePolicy = (policy: RandomPolicy) => {
  switch (policy) {
    case RandomPolicy.EQUAL_WEIGHT:
      return "Equal Weight"
    case RandomPolicy.RANDOMIZE:
      return "Randomize"
    case RandomPolicy.EPSILON_GREEDY:
      return "Epsilon Greedy"
    case RandomPolicy.SOFTMAX:
      return "Softmax"
    case RandomPolicy.UCB:
      return "UCB1"
    case RandomPolicy.MULTINOMIAL:
      return "Multinomial"
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

const getArmsWithProbabilities = () => {
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
  return { arms, probabilityOfEveryArm, policy }
}

export const getProbabilities = () => {
  const { arms, probabilityOfEveryArm, policy } = getArmsWithProbabilities()
  return {
    armsWithProbability: arms
      .map((a, index) => ({
        arm: a,
        probability: probabilityOfEveryArm[index],
      }))
      .sort((a, b) => b.probability - a.probability),
    policyName: decodePolicy(policy),
  }
}

export const randomMe = () => {
  const { arms, probabilityOfEveryArm } = getArmsWithProbabilities()
  const selectedArm = choice(arms, probabilityOfEveryArm)
  const reward = confirm(
    translate("utils.randomConfirm", { option: selectedArm.name })
  )
  selectedArm.pull(reward ? 1 : 0)
}
