import { dirname, join } from 'path';
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
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-interactions'),
		getAbsolutePath('@storybook/addon-a11y'),
		getAbsolutePath('@storybook/addon-viewport'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	docs: {},
	core: {
		disableTelemetry: true,
	},
	staticDirs: ['../public'],
};

export default config;

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, 'package.json')));
}
