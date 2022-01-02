import { AppProps } from "next/app"
import "../styles/globals.css"
import store from "store"
import { Provider } from "react-redux"
import "locales"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
