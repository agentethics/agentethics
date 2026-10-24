# Agent Ethics Documentation

This directory contains the source for the Agent Ethics [documentation site](https://agentethics.io/), built with [Astro Starlight](https://starlight.astro.build/). Pages live in `src/content/docs/`.

## Development

Run the following commands in this directory:

```bash
npm install
npm run dev
```

View the local preview at `http://localhost:4321`.

## Building

```bash
npm run build
```

The static site is written to `dist/`.

## Deployment

The site is deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`. Changes under `docs/` deploy automatically after pushing to the default branch. The custom domain is set in `public/CNAME`.
