module.exports = {
	printWidth: 140,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	trailingComma: 'all',
	semi: false,
	arrowParens: 'avoid',
	jsxSingleQuote: true,
	bracketSpacing: true,
	jsxBracketSameLine: false,

	importOrder: ['^react', '^react-native', '^[a-zA-Z]', '^@?\\w', '^[./]'],
	importOrderSeparation: false,
	importOrderSortSpecifiers: false,

	plugins: ['@trivago/prettier-plugin-sort-imports'],
}
