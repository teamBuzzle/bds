import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
	base: 'dark',
	brandTitle: 'BSD Buzzle Design System',
	brandUrl: 'https://teambuzzle.github.io/bds',
	brandImage: 'https://raw.githubusercontent.com/STREACT/bds/main/public/logo.svg',
	brandTarget: '_self',
});

addons.setConfig({
	theme: theme,
});
