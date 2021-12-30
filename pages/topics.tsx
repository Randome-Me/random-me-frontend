import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
import ScreenCenterLayout from "components/layout/ScreenCenterLayout"
import Head from "next/head"
import { useAppSelector } from "hooks"
import { useState } from "react"
import TopicsSection from "components/pages/topics/TopicsSection"
import OptionsSection from "components/pages/topics/OptionsSection"

export default function Topics() {
  const { topics } = useAppSelector((state) => state.user)

  const [activeTopicId, setActiveTopicId] = useState(topics[0]?._id)

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
          <ScreenCenterLayout>
            <Glass className="flex w-[69rem] h-4/5">
              <TopicsSection
                activeTopicId={activeTopicId}
                setActiveTopicId={setActiveTopicId}
              />
              <OptionsSection activeTopicId={activeTopicId} />
            </Glass>
          </ScreenCenterLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}
