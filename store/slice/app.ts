import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type LoaderBackgroundOpacity = "bg-opacity-50" | "bg-opacity-100"

const initialState: {
  isLoading: boolean
  loaderBackgroundOpacity: LoaderBackgroundOpacity
  loaderBefore?: React.ReactNode
  loaderAfter?: React.ReactNode
} = {
  isLoading: false,
  loaderBackgroundOpacity: "bg-opacity-100",
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.isLoading = true
    },
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
    showThickLoader: (state) => {
      state.loaderBackgroundOpacity = "bg-opacity-100"
      state.isLoading = true
    },
    showThinLoader: (state) => {
      state.loaderBackgroundOpacity = "bg-opacity-50"
      state.isLoading = true
    },
  },
})

export const {
  showLoader,
  hideLoader,
  setLoaderBefore,
  unsetLoaderBefore,
  setLoaderAfter,
  unsetLoaderAfter,
  showThickLoader,
  showThinLoader,
} = appSlice.actions

const appReducer = appSlice.reducer
export default appReducer
