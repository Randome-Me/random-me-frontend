import { AppProps } from "next/app"
import "../styles/globals.css"
import store from "store"
import { Provider } from "react-redux"
import "locales"
import AuthProvider from "providers/AuthProvider"
import LoaderLayout from "components/layout/LoaderLayout"
import { useEffect } from "react"
import { setTheme } from "utils"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTheme()
  }, [])

  return (
    <Provider store={store}>
      <LoaderLayout>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </LoaderLayout>
    </Provider>
  )
}

export default MyApp
