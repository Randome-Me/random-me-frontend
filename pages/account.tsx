import PageBackground from "components/common/PageBackground"
import Head from "next/head"

export default function Account() {
  return (
    <>
      <Head>
        <title>Account | Random Me</title>
        <meta
          name="description"
          content="This is where you can edit your account information?"
        />
      </Head>

      <PageBackground src="/images/bg-account.svg"></PageBackground>
    </>
  )
}
