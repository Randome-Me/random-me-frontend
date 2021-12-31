import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import Head from "next/head"
import TopicsSection from "components/pages/topics/TopicsSection"
import OptionsSection from "components/pages/topics/OptionsSection"
import CenteredSpanGlassLayout from "components/layout/CenteredSpanGlassLayout"

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
        <LoggedInLayout>
          <CenteredSpanGlassLayout
            classNameInner="
          xl:grid
          xl:grid-cols-5"
          >
            <div className="col-span-2">
              <TopicsSection />
            </div>
            <div className="col-span-3">
              <OptionsSection />
            </div>
          </CenteredSpanGlassLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}
