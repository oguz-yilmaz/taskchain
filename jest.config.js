module.exports = {
	preset: 'ts-jest/presets/js-with-ts-esm',
	clearMocks: true,
	moduleNameMapper: {
		'^@taskchain/(.*)$': '<rootDir>/src/$1'
	},
	collectCoverage: true,
	coverageReporters: ['html'],
	moduleDirectories: ['node_modules']
}
