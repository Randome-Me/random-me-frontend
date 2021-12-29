import PageBackground from "components/common/PageBackground"
import Head from "next/head"

export default function RandomPolicies() {
  return (
    <>
      <Head>
        <title>Random | Random Me</title>
        <meta
          name="description"
          content="Information about the Random Me policies. Random Me uses Multi-armed bandit policy to randomize your life decisions."
        />
      </Head>

      <PageBackground src="/images/bg-random-policies.svg"></PageBackground>
    </>
  )
}
