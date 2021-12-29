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
    selectTopic: (state, action: PayloadAction<string>) => {
      // TODO: update the user's selected topic in database
      state.selectedTopicId = action.payload
    },
    changeTopicPolicy: (state, action: PayloadAction<RandomPolicy>) => {
      // TODO: update the policy of user's selected topic in database
      state.topics.find(
        (topic) => topic.name === state.selectedTopicId
      ).policy = action.payload
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
  },
})

export const { setUser, selectTopic, changeTopicPolicy, pull } =
  userSlice.actions

const userReducer = userSlice.reducer
export default userReducer
