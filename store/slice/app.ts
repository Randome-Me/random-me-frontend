import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: {
  isLoading: boolean
  loaderBefore?: React.ReactNode
  loaderAfter?: React.ReactNode
} = {
  isLoading: false,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    hideLoader: (state) => {
      state.isLoading = false
    },
    setLoaderBefore: (state, action: PayloadAction<React.ReactNode>) => {
      state.loaderBefore = action.payload
    },
    unsetLoaderBefore: (state) => {
      state.loaderBefore = undefined
    },
    setLoaderAfter: (state, action: PayloadAction<React.ReactNode>) => {
      state.loaderAfter = action.payload
    },
    unsetLoaderAfter: (state) => {
      state.loaderAfter = undefined
    },
    showLoader: (state) => {
      state.isLoading = true
    },
  },
})

export const {
  hideLoader,
  setLoaderBefore,
  unsetLoaderBefore,
  setLoaderAfter,
  unsetLoaderAfter,
  showLoader,
} = appSlice.actions

const appReducer = appSlice.reducer
export default appReducer
