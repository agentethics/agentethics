// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://agentethics.io',
	integrations: [
		starlight({
			title: 'Agent Ethics',
			description: 'An open format for declaring how AI agents should behave when their actions affect people.',
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
