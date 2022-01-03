import { createNullUser } from "utils"
import { createDefaultTopic } from "utils"
import { minBias } from "utils/constants"
import { AvailableLanguages } from "types/internationalization"
import { RandomPolicy } from "types/mab"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "types"

const initialState: User = createNullUser()
// const initialState: User = null

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      {
        payload: { _id, selectedTopicId, topics, username, language },
      }: PayloadAction<User>
    ) => {
      state._id = _id
      state.selectedTopicId = selectedTopicId
      state.topics = topics
      state.username = username
      state.language = language
    },
    selectTopic: (
      state,
      { payload: { topicId } }: PayloadAction<{ topicId: string }>
    ) => {
      state.selectedTopicId = topicId
    },
    resetSelectTopic: (state) => {
      state.selectedTopicId = null
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
      // resetSelectedTopic()
    },
    addTopic: (
      state,
      { payload: { name } }: PayloadAction<{ name: string }>
    ) => {
      // TODO: get the topic passed in as a payload instead of using a dummy
      // const topic = get from db
      state.topics.push(createDefaultTopic(name))
    },
    addOption: (
      state,
      {
        payload: { topicId, name, bias = minBias },
      }: PayloadAction<{ topicId: string; name: string; bias?: number }>
    ) => {
      // TODO: add this option to the database
      // const option = get from database
      state.topics
        .find((topic) => topic._id === topicId)
        .options.push({
          _id: `${Math.random()}${Math.random()}`,
          name,
          pulls: 0,
          reward: 0,
          bias,
        })
    },
    changeLanguage: (
      state,
      { payload: { language } }: PayloadAction<{ language: AvailableLanguages }>
    ) => {
      state.language = language
    },
  },
})

export const {
  setUser,
  selectTopic,
  resetSelectTopic,
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
