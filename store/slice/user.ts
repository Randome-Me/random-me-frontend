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
  },
})

export const { setUser } = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer
