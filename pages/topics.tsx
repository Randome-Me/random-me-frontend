import Glass from "components/common/Glass"
import PageBackground from "components/common/PageBackground"
import LoggedInLayout from "components/layout/LoggedInLayout"
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
          <div
            className="
            md:my-10
            xl:px-[5%]
            "
          >
            <Glass
              className="
              px-2 xs:px-4 sm:px-8 md:px-16
              space-y-4
              lg:space-y-0
              xs:max-w-[95vw]
              mx-auto
              lg:max-h-[90%]
              xl:grid
              xl:grid-cols-5
            "
            >
              <div className="col-span-2">
                <TopicsSection
                  activeTopicId={activeTopicId}
                  setActiveTopicId={setActiveTopicId}
                />
              </div>
              <div className="col-span-3">
                <OptionsSection activeTopicId={activeTopicId} />
              </div>
            </Glass>
          </div>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}
