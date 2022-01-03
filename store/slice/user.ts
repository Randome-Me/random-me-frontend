import { AvailableLanguages } from "types/internationalization"
import { RandomPolicy } from "types/mab"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "types"
import { createLocalUser } from "utils"

const initialState: User = createLocalUser()

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      {
        payload: { _id, selectedTopicId, topics, username, lang },
      }: PayloadAction<User>
    ) => {
      state._id = _id
      state.selectedTopicId = selectedTopicId
      state.topics = topics
      state.username = username
      state.lang = lang
    },
    selectTopic: (
      state,
      { payload: { topicId } }: PayloadAction<{ topicId: string }>
    ) => {
      // TODO: update the user's selected topic in database
      state.selectedTopicId = topicId
    },
    resetSelectedTopic: (state) => {
      // TODO: reset the user's selected topic in database
      state.selectedTopicId = null
    },
    changeTopicPolicy: (state, action: PayloadAction<RandomPolicy>) => {
      // TODO: update the policy of user's selected topic in database
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
      // TODO: save the state of this arm (option) to the sever
      const topic = state.topics.find(
        (topic) => topic._id === state.selectedTopicId
      )
      const option = topic.options.find((option) => option._id === optionId)
      option.pulls += 1
      option.reward += reward
      topic.t += 1
    },
    setOptionWeight: (
      state,
      {
        payload: { topicId, optionId, weight },
      }: PayloadAction<{ topicId: string; optionId: string; weight: number }>
    ) => {
      // TODO: update the weight of this option in the database
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
      // TODO: update the name of this topic in the database
      state.topics.find((topic) => topic._id === topicId).name = name
    },
    setOptionName: (
      state,
      {
        payload: { topicId, optionId, name },
      }: PayloadAction<{ topicId: string; optionId: string; name: string }>
    ) => {
      // TODO: update the name of this option in the database
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
      // TODO: remove this option from the database
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
      // TODO: remove this topic from the database
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
      // TODO: add this topic to the database
      // const topic = get from db
      const _id = Date.now() + ""
      state.topics.push({
        _id,
        name,
        options: [],
        policy: RandomPolicy.MULTINOMIAL,
        t: -1,
      })
    },
    addOption: (
      state,
      {
        payload: { topicId, name, bias = 1 },
      }: PayloadAction<{ topicId: string; name: string; bias?: number }>
    ) => {
      console.log(">>> | add option to topicId", topicId)
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
      state.lang = language
    },
  },
})

export const {
  setUser,
  selectTopic,
  changeTopicPolicy,
  pull,
  setOptionWeight,
  setTopicName,
  setOptionName,
  resetSelectedTopic,
  removeOption,
  removeTopic,
  addTopic,
  addOption,
  changeLanguage,
} = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer
