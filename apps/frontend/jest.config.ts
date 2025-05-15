import type { Config } from 'jest'

const config: Config = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.jest.json' }]
        },

    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleNameMapper: {
        '^@lib/(.*)$': '<rootDir>/src/lib/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@shared-types/(.*)$': '<rootDir>/src/types/$1',

        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '\\.svg$': 'jest-transform-stub',
        '\\.svg\\?react$': 'jest-transform-stub',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.stories.tsx',
        '!src/**/index.ts',
        '!src/**/types.ts'
    ],
    coverageDirectory: 'coverage'
}

export default config
