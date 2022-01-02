import { AvailableLanguages } from "types/internationalization"
import { RandomPolicy } from "types/mab"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User, dumbUser } from "types"

const initialState: User | null = dumbUser

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload
    },
    selectTopic: (
      state,
      { payload: { topicId } }: PayloadAction<{ topicId: string }>
    ) => {
      state.selectedTopicId = topicId
    },
    changeTopicPolicy: (state, action: PayloadAction<RandomPolicy>) => {
      state.topics.find((topic) => topic._id === state.selectedTopicId).policy =
        action.payload
    },
    pull: (
      state,
      {
        payload: { optionId, reward },
      }: PayloadAction<{
        reward: 0 | 1
        optionId: string
      }>
    ) => {
      const topic = state.topics.find(
        (topic) => topic._id === state.selectedTopicId
      )
      const option = topic.options.find((option) => option._id === optionId)
      option.pulls += 1
      option.reward += reward
      topic.t += 1
    },
    setOptionBias: (
      state,
      {
        payload: { topicId, optionId, weight },
      }: PayloadAction<{ topicId: string; optionId: string; weight: number }>
    ) => {
      state.topics
        .find((topic) => topic._id === topicId)
        .options.find((option) => option._id === optionId).bias = weight
    },
    setTopicName: (
      state,
      {
        payload: { topicId, name },
      }: PayloadAction<{ topicId: string; name: string }>
    ) => {
      state.topics.find((topic) => topic._id === topicId).name = name
    },
    setOptionName: (
      state,
      {
        payload: { topicId, optionId, name },
      }: PayloadAction<{ topicId: string; optionId: string; name: string }>
    ) => {
      state.topics
        .find((topic) => topic._id === topicId)
        .options.find((option) => option._id === optionId).name = name
    },
    removeOption: (
      state,
      {
        payload: { topicId, optionId },
      }: PayloadAction<{ topicId: string; optionId: string }>
    ) => {
      const { options } = state.topics.find((topic) => topic._id === topicId)
      options.splice(
        options.findIndex((option) => option._id === optionId),
        1
      )
    },
    removeTopic: (
      state,
      { payload: { topicId } }: PayloadAction<{ topicId: string }>
    ) => {
      state.topics.splice(
        state.topics.findIndex((topic) => topic._id === topicId),
        1
      )
    },
    addTopic: (
      state,
      { payload: { name } }: PayloadAction<{ name: string }>
    ) => {
      // TODO: get the topic passed in as a payload instead of using a dummy
      // const topic = get from db
      state.topics.push({
        _id: `${Math.random()}${Math.random()}`,
        name,
        options: [],
        policy: RandomPolicy.MULTINOMIAL,
        t: -1,
      })
    },
    addOption: (
      state,
      {
        payload: { topicId, name, weight = 1 },
      }: PayloadAction<{ topicId: string; name: string; weight?: number }>
    ) => {
      // TODO: get the option passed in as a payload instead of using a dummy
      state.topics
        .find((topic) => topic._id === topicId)
        .options.push({
          _id: `${Math.random()}${Math.random()}`,
          name,
          pulls: 0,
          reward: 0,
          bias: weight,
        })
    },
    changeLanguage: (
      state,
      { payload: { language } }: PayloadAction<{ language: AvailableLanguages }>
    ) => {
      state.lang = language
    },
  },
})

export const {
  setUser,
  selectTopic,
  changeTopicPolicy,
  pull,
  setOptionBias,
  setTopicName,
  setOptionName,
  removeOption,
  removeTopic,
  addTopic,
  addOption,
  changeLanguage,
} = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer
