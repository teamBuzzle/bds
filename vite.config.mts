import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: './tsconfig.node.json',
			outDir: 'dist',
		}),
		tsconfigPaths(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './lib'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'react-dom', '@emotion/react', '@emotion/styled', '@mui/material', 'motion'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'@emotion/react': 'emotionReact',
					'@emotion/styled': 'emotionStyled',
					'@mui/material': 'mui',
					motion: 'motion',
				},
				preserveModules: true,
				preserveModulesRoot: 'lib',
				entryFileNames: (chunk) => `${chunk.name.replace(/^lib\//, '')}.js`,
				dir: 'dist',
			},
		},
		minify: 'esbuild',
		sourcemap: true,
	},
	optimizeDeps: {
		include: ['@storybook/core'],
	},
	esbuild: {
		logOverride: {
			'this-is-undefined-in-esm': 'silent',
			'unsupported-jsx-comment': 'silent',
			'use-of-eval': 'silent',
		},
	},
});
