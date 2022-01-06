import PageBackground from "components/common/PageBackground"
import CenteredSpanGlassLayout from "components/layout/CenteredSpanGlassLayout"
import LoggedInLayout from "components/layout/LoggedInLayout"
import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"
import { useTranslation, withTranslation } from "react-i18next"
import { getPageTitle, onPageMount } from "utils"
import { ROUTES } from "utils/constants"

const RandomPolicies = () => {
  const { t } = useTranslation("translation", { keyPrefix: "policies" })

  const h1Class = `
  text-slate-50
  font-Kanit
  mb-6
  text-4xl md:text-5xl lg:text-6xl
  `
  const h2Class = `
  text-slate-100
  mb-4
  text-2xl md:text-3xl
  `
  const h3Class = `
  text-yellow-400
  mb-2
  text-xl md:text-2xl
  `
  const pClass = `
  text-slate-50
  `

  useEffect(() => {
    onPageMount()
  }, [])

  return (
    <>
      <Head>
        <title>{getPageTitle("policies.title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={getPageTitle("policies.title")} />
        <meta property="og:description" content={t("description")} />
      </Head>

      <PageBackground
        objectPosition="90% 50%"
        dark="/images/bg-random-policies-dark.svg"
        light="/images/bg-random-policies.svg"
      >
        <LoggedInLayout>
          <CenteredSpanGlassLayout>
            <main
              className="
            space-y-4
            "
            >
              <header>
                <h1 className={h1Class}>{t("title")}</h1>
                <p
                  className={pClass}
                  dangerouslySetInnerHTML={{ __html: t("intro") }}
                ></p>
              </header>

              <article>
                <h2 className={h2Class}>{t("motivation")}</h2>
                <p
                  className={pClass}
                  dangerouslySetInnerHTML={{ __html: t("motivationText") }}
                ></p>
              </article>

              <h2 className={h2Class}>{t("basicPolicies")}</h2>
              <article>
                <h3 className={h3Class}>Multinomial</h3>
                <p className={pClass}>
                  <span
                    dangerouslySetInnerHTML={{ __html: t("multinomialText") }}
                  ></span>
                  <Link href={ROUTES.topics}>
                    <a className="underline font-medium">{t("topicsPage")}</a>
                  </Link>
                  {t("multinomialText2")}
                </p>
              </article>

              <article>
                <h3 className={h3Class}>Equal Weight</h3>
                <p className={pClass}>{t("equalWeightText")}</p>
              </article>

              <article>
                <h3 className={h3Class}>Randomize</h3>
                <p className={pClass}>{t("randomizeText")}</p>
              </article>

              <article>
                <h2 className={h2Class}>{t("advancedPolicies")}</h2>
                <p
                  className={pClass}
                  dangerouslySetInnerHTML={{
                    __html: t("advancedPoliciesText"),
                  }}
                ></p>
                <p className={pClass}>{t("advancedPoliciesText2")}</p>
              </article>

              <article>
                <a
                  className=""
                  href="https://docs.microsoft.com/en-us/archive/msdn-magazine/2019/august/test-run-the-ucb1-algorithm-for-multi-armed-bandit-problems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3
                    className={
                      h3Class +
                      " underline decoration-yellow-400 hover:decoration-yellow-300"
                    }
                  >
                    Upper Confidence Bound type 1 - UCB1
                  </h3>
                </a>
                <p
                  className={pClass}
                  dangerouslySetInnerHTML={{ __html: t("ucb1Text") }}
                ></p>{" "}
                <p
                  className={pClass}
                  dangerouslySetInnerHTML={{ __html: t("ucb1Text2") }}
                ></p>
              </article>

              <article>
                <a
                  href="https://www.geeksforgeeks.org/epsilon-greedy-algorithm-in-reinforcement-learning/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3
                    className={
                      h3Class +
                      " underline decoration-yellow-400 hover:decoration-yellow-300"
                    }
                  >
                    Epsilon Greedy
                  </h3>
                </a>
                <p
                  className={pClass}
                  dangerouslySetInnerHTML={{ __html: t("epsilonGreedyText") }}
                ></p>
              </article>

              <article>
                <a
                  href="https://en.wikipedia.org/wiki/Softmax_function"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3
                    className={
                      h3Class +
                      " underline decoration-yellow-400 hover:decoration-yellow-300"
                    }
                  >
                    Softmax
                  </h3>
                </a>
                <p
                  className={pClass}
                  dangerouslySetInnerHTML={{ __html: t("softmaxText") }}
                ></p>
              </article>
            </main>
          </CenteredSpanGlassLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}

export default withTranslation()(RandomPolicies)
