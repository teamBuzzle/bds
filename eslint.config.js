import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import storybook from 'eslint-plugin-storybook';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
	baseDirectory: dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			'**/node_modules',
			'**/.vscode',
			'**/.gitlab',
			'**/dist',
			'**/storybook-static',
			'**/.pnp.cjs',
			'**/.husky',
		],
	},
	...fixupConfigRules(
		compat.extends(
			'airbnb',
			'plugin:import/errors',
			'plugin:import/warnings',
			'plugin:prettier/recommended',
			'plugin:@typescript-eslint/recommended',
		),
	),
	{
		plugins: {
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			prettier: fixupPluginRules(prettier),
			storybook: fixupPluginRules(storybook),
		},

		languageOptions: {
			parser: tsParser,
		},

		rules: {
			'linebreak-style': 0,
			'import/prefer-default-export': 0,
			'prettier/prettier': 0,
			'import/extensions': 0,
			'no-use-before-define': 0,
			'import/no-unresolved': 0,
			'import/no-extraneous-dependencies': 0,
			'no-shadow': 0,
			'react/require-default-props': 'off',
			'no-param-reassign': 0,
			'react/prop-types': 0,
			'react/jsx-props-no-spreading': 0,
			'no-restricted-syntax': 0,

			'react/no-unknown-property': [
				'error',
				{
					ignore: ['css'],
				},
			],

			'react/function-component-definition': [
				2,
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],

			'react/jsx-filename-extension': [
				2,
				{
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			],

			'import/order': [
				'warn',
				{
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},

					'newlines-between': 'never',

					groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'type', 'unknown'],

					pathGroups: [
						{
							pattern: 'react',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '@/**',
							group: 'internal',
							position: 'after',
						},
					],

					pathGroupsExcludedImportTypes: ['react'],
				},
			],

			'jsx-a11y/no-noninteractive-element-interactions': 0,
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'no-await-in-loop': 0,
		},
	},
];
