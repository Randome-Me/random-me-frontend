import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./slice/app"
import userReducer from "./slice/user"

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
