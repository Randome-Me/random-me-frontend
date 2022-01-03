const en = {
  translation: {
    utils: {
      randomConfirm: "Selected {{option}}\nDo you like this option?",
    },
    login: {
      title: "Login",
      description: "Login to Random Me or continue as guest.",
      emptyUsernameAlert: "Please enter your username.",
      emptyPasswordAlert: "Please enter your password.",
      username: "Username",
      password: "Password",
      forgotPassword: "Forgot password?",
      register: "Register",
      orLoginWith: "Or login with",
      srOnlyWithGoogle: "Login with Google",
      srOnlyWithFacebook: "Login with Facebook",
      or: "or",
      continueAsGuest: "continue as guest",
      login: "Login",
    },
    register: {
      title: "Register",
      description: "Register to Random Me.",
      emptyUsernameAlert: "Please enter your username.",
      emptyPasswordAlert: "Please enter your password.",
      emptyConfirmPasswordAlert: "Please confirm your password.",
      emptyEmailAlert: "Please enter your email.",
      passwordConfirmAlert: "Passwords do not match.",
      usernameExamplePlaceholder: "e.g. johndoe",
      emailExamplePlaceholder: "e.g. johndoe@example.com",
      passwordExamplePlaceholder: "e.g. password123",
      passwordConfirmExamplePlaceholder: "password123",
    },
    home: {
      title: "Random",
      description: "Let's randomize your life decisions with Random Me!",
      topics: "Topics",
      "add option": "Add Option",
      policy: "Policy",
      "see probabilities": "See probabilities",
      probability: "Probability",
      option: "Option",
    },
    topics: {
      title: "Topics",
      description:
        "See all the topics and options that you can choose to random from. You can edit, add, or delete them here.",
      editTopicNamePrompt: "Enter a new topic name",
      addTopicPlaceholder: "Add a topic",
      editWeightPrompt: "Enter a new bias",
      invalidWeight: "Please enter a number",
      weightOutOfRange: "Please enter a number between 1 and 10",
      editOptionNamePrompt: "Enter a new option name",
      options: "Options",
      bias: "Bias",
      addOptionPlaceholder: "Add an option",
    },
    account: {
      title: "Account",
      description: "This is where you can edit your account information?",
      resetPassword: "Reset Password",
    },
    policies: {
      title: "Random Policies",
      description: "Information about the Random Me policies.",
      intro:
        "The Random Me app let you choose between a number of random policies, namely, <em>Equal Weight</em>, <em>Epsilon Greedy</em>, <em>Multinomial</em>,                 <em>Randomize</em>, <em>Softmax</em>, and <em>UCB1</em>.",
      motivation: "Motivation",
      motivationText:
        "The <strong>Random Me</strong> app is a project inspired by Multi-armed bandit problem, aiming to help people who suffer from not knowing what to choose among a set of options. For example, if you don&apos;t know what to do with your free time or what game you&apos;re going to play, you can use the Random Me app to randomly choose between a set of options.",
      basicPolicies: "Basic Policies",
      multinomialText:
        "The Multinomial policy makes decisions based on the relative weight or <em>bias</em> of each option. You can set or edit the bias of each option in the ",
      topicsPage: "topics page",
      multinomialText2:
        ". The bias is an integer, ranging from 1 to 10. The higher the bias, the more likely the option is to be chosen. For example, if you have 3 options with biases 1, 1, 5, having the sum of the biases equal to 7, then each option has a probability of 1/7, 1/7, and 5/7, respectively.",
      equalWeightText:
        "The probability of getting each option is equal. For example, if you have 3 options, the probability of getting each option is 1/3.",
      randomizeText:
        "The Randomize policy randomly chooses an option. There are no fancy rules to this policy.",
      advancedPolicies: "Advanced Policies",
      advancedPoliciesText:
        'The following policies are policies used in <a class="underline font-medium" href="https://en.wikipedia.org/wiki/Multi-armed_bandit#The_multi-armed_bandit_model" target="_blank" rel="noreferrer">Multi-armed bandit</a>. In short, Multi-armed bandit aims to make the best decision among a set of options over time.',
      advancedPoliciesText2:
        "There are 2 stages in the Multi-armed bandit model: exploration and exploitation. The exploration stage explores the options to find if an option is good or not. The exploitation stage chooses the best option from the knowledge of the exploration stage. Each policy can behave in exploration or exploitation stage, depending on the parameters passed to the algorithm of the policy.",
      ucb1Text:
        "Rather than performing exploration by simply selecting an arbitrary option, chosen with a probability that remains constant, the UCB1 algorithm changes its exploration-exploitation balance as it gathers more knowledge of the environment. It moves from being primarily focused on exploration, when options that have been tried the least are preferred, to instead concentrate on exploitation, selecting the option with the highest estimated reward.",
      ucb1Text2:
        "The reward of <em>1</em> is the result of you answering that <em>you like the option that the Random Me app gives you</em>, else <em>0</em>. So bear in mind that your answers are taken into account by the policies.",
      epsilonGreedyText:
        "Epsilon Greedy or <em>&epsilon;-greedy</em> is a policy that performs exploration with probability of <em>1 - &epsilon;</em> using Equal Weight policy else selects the option with the highest estimated reward.",
      softmaxText:
        'Softmax is a function that, erm, just read <a class="underline font-medium" href="https://en.wikipedia.org/wiki/Softmax_function" target="_blank" rel="noopener noreferrer">this wikipedia</a>.',
    },
  },
}

export default en
