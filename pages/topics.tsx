import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import Head from "next/head"

export default function Topics() {
  return (
    <>
      <Head>
        <title>Topics | Random Me</title>
        <meta
          name="description"
          content="See all the topics and options that you can choose to random from. You can edit, add, or delete them here."
        />
      </Head>

      <PageBackground src="/images/bg-topics.svg">
        <LoggedInLayout></LoggedInLayout>
      </PageBackground>
    </>
  )
}
