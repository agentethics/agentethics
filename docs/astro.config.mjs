// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://agentethics.io',
	integrations: [
		starlight({
			title: 'Agent Ethics',
			description: 'A portable standard for declaring the ethics AI agents must uphold toward people, organizations and other agents.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/agentethics/agentethics' },
			],
			editLink: {
				baseUrl: 'https://github.com/agentethics/agentethics/edit/main/docs/',
			},
			sidebar: [
				{ label: 'Overview', slug: 'index' },
				{ label: 'Specification', slug: 'specification' },
				{ label: 'Example', slug: 'example' },
			],
		}),
	],
});
