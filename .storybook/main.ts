import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: [
		{
			directory: '../lib',
			titlePrefix: 'BDS Buzzle Design System',
			files: '**/*.@(mdx|stories.@(mdx|ts|tsx))',
		},
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {},
	core: {
		builder: {
			name: '@storybook/builder-vite',
			options: {
				viteConfigPath: 'vite.config.mts',
			},
		},
		disableTelemetry: true,
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
	staticDirs: ['../public'],
	async viteFinal(config) {
		// TODO: https://github.com/storybookjs/storybook/issues/30480 vite:import-analysis 이슈 해결해야함.
		return mergeConfig(config, {
			optimizeDeps: {
				exclude: [...(config.optimizeDeps?.exclude ?? []), '@storybook/builder-vite'],
			},
		});
	},
};

export default config;
