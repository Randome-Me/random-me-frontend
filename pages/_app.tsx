import { AppProps } from "next/app"
import "../styles/globals.css"
import store from "store"
import { Provider } from "react-redux"
import "locales"
import AuthProvider from "providers/AuthProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
}

export default MyApp
