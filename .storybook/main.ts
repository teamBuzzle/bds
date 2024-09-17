import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: [
		{
			directory: '../lib',
			titlePrefix: 'BSD Buzzle Design System',
			files: '**/*.@(mdx|stories.@(mdx|ts))',
		},
	],
	addons: [
		getAbsolutePath('@storybook/addon-onboarding'),
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
	docs: {
		autodocs: true,
	},
	core: {
		disableTelemetry: true,
	},
};

export default config;
