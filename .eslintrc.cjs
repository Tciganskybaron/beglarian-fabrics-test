module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'next/core-web-vitals',
		'next/typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'prettier/prettier': 'error',
	},
};
