import type { articles } from "@/lib/portfolio-content";

type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
};

type ArticleContent = {
  sections: readonly ArticleSection[];
};

type ArticleSlug = (typeof articles)[number]["slug"];

export const articleContent = {
  "designing-software-as-a-system": {
    sections: [
      {
        heading: "The screen is where consequences become visible",
        paragraphs: [
          "A product interface can make a system feel simple, but it cannot make the underlying decisions disappear. Every status label points to a domain state. Every disabled button implies a permission or transition rule. Every loading message reveals something about a network or process boundary.",
          "Starting with the screen is useful when it helps a team see the workflow. It becomes risky when the screen is treated as the whole product. The implementation then accumulates decisions in event handlers, one-off conditions, and copy that promises behavior the system cannot reliably provide.",
        ],
      },
      {
        heading: "Map the job, state, and failure together",
        paragraphs: [
          "Before choosing components, write down the job a person is trying to complete, the states the system can actually represent, and the failures that can interrupt the path. These are not separate design and engineering exercises. They are three views of one product contract.",
          "This map does not need to become a large specification. A short state table and a real workflow are often enough. The goal is to expose disagreement while changes are still cheap, then place each decision in the layer that can enforce it consistently.",
        ],
      },
      {
        heading: "Design the operating experience",
        paragraphs: [
          "A complete product includes recovery, observability, support, and maintenance. Ask how a user knows that work succeeded, how they resume after interruption, and how the team diagnoses a report without guessing. Those questions shape data, interfaces, and deployment choices at the same time.",
          "Good product engineering makes these concerns feel coherent. The result is not a more complicated screen. It is a smaller set of promises that the whole system can keep.",
        ],
      },
    ],
  },
  "useful-ai-agents-need-boundaries": {
    sections: [
      {
        heading: "Capability is not a workflow",
        paragraphs: [
          "An agent that can search, edit, execute, and publish has impressive capability. It still does not know which evidence should control a decision, which files it owns, or when another action would create more risk than value. Those are workflow boundaries, and they need to be designed.",
          "A long prompt can describe intent, but intent alone is difficult to verify. Useful agents connect instructions to explicit tools, observable state, and focused checks. The environment should make the desired path easier to follow and consequential mistakes harder to perform.",
        ],
      },
      {
        heading: "Evidence changes the quality of action",
        paragraphs: [
          "The most reliable sequence is simple: find the controlling surface, state a falsifiable hypothesis, make the smallest grounded change, and run a check that can prove it wrong. An agent becomes more trustworthy when its confidence is tied to evidence that another engineer can inspect.",
          "This also keeps exploration proportional. Search is valuable until the next action becomes clear. Beyond that point, more context can hide uncertainty instead of reducing it.",
        ],
      },
      {
        heading: "Stopping is part of the design",
        paragraphs: [
          "A production workflow needs escalation rules. Stop when a secret is required, when ownership is ambiguous, or when a failed check invalidates the working model. Ask for a decision when multiple valid outcomes depend on product intent rather than technical fact.",
          "Boundaries do not make an agent less capable. They turn broad capability into dependable behavior, which is what allows automation to participate in real engineering work.",
        ],
      },
    ],
  },
  "developer-tools-should-disappear": {
    sections: [
      {
        heading: "Friction is usually cumulative",
        paragraphs: [
          "A slow setup command, an undocumented environment variable, and an inconsistent script each look minor in isolation. Repeated across a week and a team, they become a tax on attention. Developer experience improves when these small transitions are treated as product interactions.",
          "The goal is not to add a dashboard for every task. It is to remove decisions that the system can make consistently, keep important choices explicit, and return useful feedback at the moment someone can act on it.",
        ],
      },
      {
        heading: "Prefer one dependable path",
        paragraphs: [
          "A repository should make its normal workflow obvious. Installation, validation, building, and local execution need memorable commands with equivalent behavior across supported environments. When there are several paths, document why they exist and test the contract they share.",
          "Reproducible environments are valuable for the same reason. Containers, lockfiles, and version constraints are not ends in themselves; they reduce the number of hidden variables between a reported problem and a useful diagnosis.",
        ],
      },
      {
        heading: "Good tools preserve the engineer's attention",
        paragraphs: [
          "The best internal tools are quiet when the system is healthy and precise when it is not. They report the failing boundary, preserve the surrounding context, and suggest the next discriminating action without burying the result in ceremony.",
          "When that works, the tool seems to disappear. The engineer spends less time operating the workflow and more time thinking about the product decision that matters.",
        ],
      },
    ],
  },
} satisfies Record<ArticleSlug, ArticleContent>;
