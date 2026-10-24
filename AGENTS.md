# Agent Instructions

## Project perspective

Agent Ethics is a small, portable, client-neutral format. Keep the format small:
every new requirement imposes costs on every implementation and should address
a demonstrated need, not hypothetical completeness.

The format defines structure. It does not prescribe a moral tradition. Keep
tradition-specific content out of the specification.

## Authority and boundaries

`docs/src/content/docs/specification.mdx` is authoritative for format requirements.
Explanatory documentation, examples, tests, and implementations do not add
requirements to the format. When these surfaces disagree, surface the
discrepancy and resolve it in the specification rather than treating existing
implementation behavior as normative.

`ethics-ref/` is a demonstration artifact, not a production SDK or a source of
additional format requirements. Modify it only when the task explicitly scopes
work there.

## Documentation

The documentation under `docs/` is an Astro Starlight site published at agentethics.io.
Pages live in `docs/src/content/docs/`.
Treat rendered behavior and published routes, not source text alone, as part
of documentation correctness.

## Contributions

`CONTRIBUTING.md` owns contribution scope, routing, and AI-assistance
disclosure policy. Read and follow it before beginning work intended for
upstream submission.
