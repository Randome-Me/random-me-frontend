import PageBackground from "components/common/PageBackground"
import CenteredSpanGlassLayout from "components/layout/CenteredSpanGlassLayout"
import LoggedInLayout from "components/layout/LoggedInLayout"
import Head from "next/head"
import Link from "next/link"

export default function RandomPolicies() {
  const h1Class = `
  text-slate-50
  font-Sen
  mb-6
  text-6xl
  `
  const h2Class = `
  text-slate-100
  mb-4
  `
  const h3Class = `
  text-yellow-400
  mb-2
  `
  const pClass = `
  text-slate-50
  `
  return (
    <>
      <Head>
        <title>Random | Random Me</title>
        <meta
          name="description"
          content="Information about the Random Me policies. Random Me uses Multi-armed bandit policy to randomize your life decisions."
        />
      </Head>

      <PageBackground src="/images/bg-random-policies.svg">
        <LoggedInLayout>
          <CenteredSpanGlassLayout>
            <main
              className="
            space-y-4
            "
            >
              <header>
                <h1 className={h1Class}>Random Policies</h1>
                <p className={pClass}>
                  The Random Me app let you choose between a number of random
                  policies, namely, <em>Equal Weight</em>,{" "}
                  <em>Epsilon Greedy</em>, <em>Multinomial</em>,{" "}
                  <em>Randomize</em>, <em>Softmax</em>, and <em>UCB1</em>.
                </p>
              </header>

              <article>
                <h2 className={h2Class}>Motivation</h2>
                <p className={pClass}>
                  The <strong>Random Me</strong> app is a project inspired by
                  Multi-armed bandit problem, aiming help people who suffer from
                  not knowing what to choose among a set of options. For
                  example, you don&apos;t know what to do with your free time or
                  what game you&apos;re going to play, you can use the Random Me
                  app to randomly choose between a set of options.
                </p>
              </article>

              <h2 className={h2Class}>Basic Policies</h2>
              <article>
                <h3 className={h3Class}>Multinomial</h3>
                <p className={pClass}>
                  The Multinomial policy makes decisions based on the relative
                  weight or <em>bias</em> of each option. You can set or edit
                  the bias of each option in the{" "}
                  <Link href="/topics">
                    <a className="underline font-medium">topics page</a>
                  </Link>
                  . The bias is an integer, ranging from 1 to 10. The higher the
                  bias, the more likely the option is to be chosen. For example,
                  if you have 3 options with biases 1, 1, 5, having the sum of
                  the biases equal to 7, then each option has a probability of
                  1/7, 1/7, and 5/7, respectively.
                </p>
              </article>

              <article>
                <h3 className={h3Class}>Equal Weight</h3>
                <p className={pClass}>
                  The probability of getting each option is equal. For example,
                  if you have 3 options, the probability of getting each option
                  is 1/3.
                </p>
              </article>

              <article>
                <h3 className={h3Class}>Randomize</h3>
                <p className={pClass}>
                  The Randomize policy randomly chooses an option. There are no
                  fancy rules to this policy.
                </p>
              </article>

              <article>
                <h2 className={h2Class}>Advanced Policies</h2>
                <p className={pClass}>
                  The following policies are policies used in{" "}
                  <a
                    className=""
                    href="https://en.wikipedia.org/wiki/Multi-armed_bandit#The_multi-armed_bandit_model"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Multi-armed bandit
                  </a>
                  . In short, Multi-armed bandit aims to make the best decision
                  among a set of options over time.
                </p>

                <p className={pClass}>
                  There are 2 stages in the Multi-armed bandit model:
                  exploration and exploitation. The exploration stage explores
                  the options to find if an option is good or not. The
                  exploitation stage chooses the best option from the knowledge
                  of the exploration stage. Each policy can behave in
                  exploration or exploitation stage, depending on the parameters
                  passed to the algorithm of the policy.
                </p>
              </article>

              <article>
                <a
                  className=""
                  href="https://docs.microsoft.com/en-us/archive/msdn-magazine/2019/august/test-run-the-ucb1-algorithm-for-multi-armed-bandit-problems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className={h3Class + " underline decoration-yellow-400"}>
                    Upper Confidence Bound type 1 - UCB1
                  </h3>
                </a>
                <p className={pClass}>
                  Rather than performing exploration by simply selecting an
                  arbitrary option, chosen with a probability that remains
                  constant, the UCB algorithm changes its
                  exploration-exploitation balance as it gathers more knowledge
                  of the environment. It moves from being primarily focused on
                  exploration, when options that have been tried the least are
                  preferred, to instead concentrate on exploitation, selecting
                  the option with the highest estimated reward.
                </p>
                <p className={pClass}>
                  The reward of <em>1</em> is the result of you answering that{" "}
                  <em>you like the option that the Random Me app gives you</em>,
                  else <em>0</em>. So bear in mind that your answers are taken
                  into account by the policies.
                </p>
              </article>

              <article>
                <h3 className={h3Class}>Epsilon Greedy</h3>
                <p className={pClass}>
                  Epsilon Greedy or <em>&epsilon;-greedy</em> is a policy that
                  performs exploration with probability of{" "}
                  <em>1 - &epsilon;</em> using Equal Weight policy else selects
                  the option with the highest estimated reward.
                </p>
              </article>

              <article>
                <a
                  href="https://en.wikipedia.org/wiki/Softmax_function"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className={h3Class + " underline decoration-yellow-400"}>
                    Softmax
                  </h3>
                </a>
                <p className={pClass}>
                  Softmax is a function that, erm, just read{" "}
                  <a
                    className="underline font-medium"
                    href="https://en.wikipedia.org/wiki/Softmax_function"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    this wikipedia
                  </a>
                  .
                </p>
              </article>
            </main>
          </CenteredSpanGlassLayout>
        </LoggedInLayout>
      </PageBackground>
    </>
  )
}
