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
      state.selectedTopic = action.payload
    },
    changeTopicPolicy: (state, action: PayloadAction<RandomPolicy>) => {
      // TODO: update the policy of user's selected topic in database
      state.topics.find((topic) => topic.name === state.selectedTopic).policy =
        action.payload
    },
  },
})

export const { setUser, selectTopic, changeTopicPolicy } = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer
