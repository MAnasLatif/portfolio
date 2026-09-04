An agent that can search, edit, execute, and publish has impressive capability. It still does not know which evidence should control a decision, which files it owns, or when another action would create more risk than value. Those are workflow boundaries, and they need to be designed.

A long prompt can describe intent, but intent alone is difficult to verify. Useful agents connect instructions to explicit tools, observable state, and focused checks.

---

## Capability is not a workflow

The environment should make the desired path easier to follow and consequential mistakes harder to perform. Capability becomes dependable only when it operates inside a clear sequence:

1. Find the surface that controls the behavior.
2. State a falsifiable hypothesis.
3. Make the smallest grounded change.
4. Run a check that can prove the hypothesis wrong.

This sequence gives both the agent and the engineer a shared account of why an action was taken.

## Evidence changes the quality of action

An agent becomes more trustworthy when its confidence is tied to evidence that another engineer can inspect. Runtime values, diagnostics, focused tests, and source ownership are stronger inputs than a plausible explanation assembled from incomplete context.

This also keeps exploration proportional. Search is valuable until the next action becomes clear. Beyond that point, more context can hide uncertainty instead of reducing it.

> Evidence should narrow the next action, not merely decorate the final explanation.

## Stopping is part of the design

A production workflow needs escalation rules. Stop when a secret is required, when ownership is ambiguous, or when a failed check invalidates the working model. Ask for a decision when multiple valid outcomes depend on product intent rather than technical fact.

Boundaries do not make an agent less capable. They turn broad capability into dependable behavior, which is what allows automation to participate in real engineering work.