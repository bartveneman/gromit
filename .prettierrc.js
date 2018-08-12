module.exports = {
	useTabs: true,
	semi: false,
	singleQuote: true,
	bracketSpacing: false,
	proseWrap: 'always',
	overrides: [
		{
			files: '*.json',
			options: {
				useTabs: false
			}
		}
	],
	unicorn: {},
	noProcessExit: false
}
