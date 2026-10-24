# Agent Ethics

An open format for declaring how AI agents should behave when their actions affect people.

> **Status:** Draft. The format is under active design and will change.

## What is ETHICS.md?

`ETHICS.md` is a Markdown file that states the ethical commitments an agent must honor while it works: the lines it must not cross, the situations where it must stop and ask a human, and how to weigh the interests of the person it serves against the people its actions affect.

Where `AGENTS.md` tells an agent how a project works and a `SKILL.md` teaches it a task, `ETHICS.md` tells it how to conduct itself while doing either.

```
my-project/
├── AGENTS.md     # how this project works
├── ETHICS.md     # how agents must conduct themselves here
└── ...
```

## Design principles

- **Always in context.** Ethical guidance has to be present before the agent recognizes a dilemma, so `ETHICS.md` is read at the start of every session rather than loaded on demand.
- **Tighten, never loosen.** Files compose from organization to project to task. A more specific file may add constraints; it may not remove ones set above it, and none may override the policies of the model provider.
- **Structure, not doctrine.** The format defines where commitments, red lines, escalation triggers and exceptions go. It does not prescribe one moral tradition.
- **Testable.** Every commitment should be checkable by an evaluation, so declared ethics can be compared with observed behavior.

## Getting started

- **[Documentation](https://agentethics.io)**: guides and background
- **[Specification](https://agentethics.io/specification)**: format details

## Open development

Agent Ethics is developed in the open and is intended for contribution to a neutral open source foundation. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to get involved.

## License

Code in this repository is licensed under [Apache 2.0](LICENSE). Documentation is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). See individual directories for details.
