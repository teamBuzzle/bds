import react from '@vitejs/plugin-react';
import { mkdir, writeFile } from 'fs/promises';
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
		// 서버 컴포넌트 래퍼 생성을 위한 사용자 정의 플러그인
		{
			name: 'generate-server-components',
			async closeBundle() {
				// 서버 컴포넌트 래퍼 디렉토리 생성
				const serverWrapperDir = resolve(__dirname, 'dist/server');
				await mkdir(serverWrapperDir, { recursive: true });

				// 컴포넌트 폴더 경로
				const componentFolders = ['atoms', 'molecules'];

				// 서버 컴포넌트 인덱스 파일 생성
				let indexContent = `// 서버 컴포넌트용 래퍼\n\n`;

				// 서버 컴포넌트 래퍼 생성
				for (const folder of componentFolders) {
					// 해당 폴더의 모든 컴포넌트에 대한 서버 컴포넌트 래퍼 생성
					const wrapperPath = resolve(serverWrapperDir, `${folder}.js`);
					const wrapperContent = `// @ts-nocheck
// 서버 컴포넌트 래퍼 - ${folder}\n
import * as Components from '../components/${folder}';\n
const serverComponents = {};\n
// 각 컴포넌트에 대한 서버 컴포넌트 래퍼 생성
Object.entries(Components).forEach(([name, Component]) => {
  // 서버 컴포넌트 래퍼 함수 생성
  serverComponents[name] = (props) => {
    // 서버 컴포넌트에서 클라이언트 컴포넌트 호출
    const ClientComponent = Components[name];
    return ClientComponent(props);
  };
});\n
export default serverComponents;
`;
					await writeFile(wrapperPath, wrapperContent, 'utf-8');

					// 인덱스 파일에 추가
					indexContent += `export { default as ${folder} } from './${folder}';\n`;
				}

				// 인덱스 파일 작성
				await writeFile(resolve(serverWrapperDir, 'index.js'), indexContent, 'utf-8');
			},
		},
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
				banner: (chunk) => {
					// 클라이언트 컴포넌트에 'use client' 지시어 자동 추가
					if (chunk.fileName.includes('components/')) {
						return "'use client';";
					}
					return '';
				},
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
