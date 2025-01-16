// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion, resolve } from "starlight-ion-theme";
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'POE2备忘录',
			locales: {				
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				  },
			  },
			logo: {
				src: './src/assets/logo.webp'
			  },
			pagination: false,
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],			
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '[home] 首页',
    				link: '/'
				},
				{
					label: '[home] 站点介绍',
    				link: '/getting-started/'
				},
				{
					label: '[home] 版本变更',
    				link: '/changelog/',
					badge: {
						variant: 'tip',
						text: 'New'
					  }
				},
				{
					label: '内容集合',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				ion({
					icons: {
						iconPath: "./src/icons",
					  },
					footer: {
					text: '©️ 2025 Vagrant Soul',
					links: [{
						text: '流放备忘录',
						href: 'https://louisescher.dev',
					}],
					icons: [{
						name: 'github',
						href: 'https://github.com/louisescher/starlight-ion-theme'
					}]
					}
				  })
			  ]
		}),
	],
});
