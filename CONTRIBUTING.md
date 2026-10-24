# Contributing to Agent Ethics

Thank you for your interest in contributing. This document explains how to contribute and where different kinds of feedback belong.

## Types of Contributions

### Documentation Improvements

Improvements to the [documentation site](https://agentethics.io) are welcome: typo fixes, clearer explanations, better examples, and new guides. Documentation lives in the `docs/` directory.

### Bug Reports

Found a problem in the specification, documentation, or reference library? [Open an issue](https://github.com/agentethics/agentethics/issues).

### Proposals, Questions, and Feedback

Feature requests, design questions and general feedback also go in [issues](https://github.com/agentethics/agentethics/issues). Start the title with `Proposal:` for changes to the specification, so they can be labeled and reviewed together.

Proposals should address a real problem you have encountered while writing or implementing `ETHICS.md`. Show the problem and how your proposal addresses it.

The bar for additions to the specification is high. It is much easier to add to a specification than to remove from it, and every addition is something every implementer must support. When in doubt, leave it out.

Proposals that would make the specification favor one moral tradition over others will not be accepted into the core format. Tradition-specific guidance belongs in profiles, which are maintained separately.

### Reference Library (`ethics-ref/`)

The reference library is a demonstration of the format. Bug reports and feedback are welcome; code contributions are not being accepted while its direction is settled.

## Development Setup

### Documentation Site

The docs site is built with [Astro Starlight](https://starlight.astro.build/).

```bash
cd docs
npm install
npm run dev
```

The local preview is available at `http://localhost:4321`.

## Submitting Changes

1. [Fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Create a branch for your changes
3. Make your changes and verify them locally
4. Submit a pull request

Keep pull requests focused on one logical change and link related issues.

## AI Contributions

> [!IMPORTANT]
> If you used **any kind of AI assistance** in a contribution, disclose it in the pull request or issue, along with the extent of that assistance.

AI tools are welcome. Disclosure tells reviewers how much scrutiny to apply. Trivial spacing or typo fixes do not need to be disclosed.

When submitting AI-assisted contributions, make sure you:

- Disclose the AI use and its extent
- Understand what the changes do
- Can explain why the change is needed and how it fits the project's goals
- Include scenarios or examples that demonstrate the improvement

Submissions that do not follow this policy may be closed.

## License

By contributing, you agree that your contributions will be licensed under the [Apache License 2.0](LICENSE) for code and the [CC-BY 4.0](docs/LICENSE) license for documentation and specification text.
