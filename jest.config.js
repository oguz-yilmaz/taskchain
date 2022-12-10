module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	clearMocks: true,
	moduleNameMapper: {
		'^@tsk/(.*)$': '<rootDir>/src/$1'
	},
	collectCoverage: true,
	coverageReporters: ['html'],
	moduleDirectories: ['node_modules']
}
