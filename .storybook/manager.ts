import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
	base: 'dark',
	brandTitle: 'BSD Buzzle Design System',
	brandUrl: 'https://buzzle.tools',
	brandImage: '/logoWhite.svg',
	brandTarget: '_self',
});

addons.setConfig({
	theme: theme,
});
