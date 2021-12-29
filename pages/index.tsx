import PageBackground from "components/common/PageBackground"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Random | Random Me</title>
        <meta
          name="description"
          content="Let's randomize your life decisions with Multi-armed bandit policy!"
        />
      </Head>

      <PageBackground src="/images/bg-index.svg"></PageBackground>
    </>
  )
}
