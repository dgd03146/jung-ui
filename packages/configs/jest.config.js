/** @type {import('jest').Config} */
const config = {
	coverageProvider: 'v8',

	setupFilesAfterEnv: ['./jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	preset: 'ts-jest',
	testMatch: ['**/*.test.[jt]s?(x)'],
};

module.exports = config;
