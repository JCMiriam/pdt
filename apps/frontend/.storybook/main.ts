import { mergeConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@assets': path.resolve(__dirname, '../src/assets'),
          '@components': path.resolve(__dirname, '../src/components'),
          '@styles': path.resolve(__dirname, '../src/styles'),
        },
      },
      plugins: [svgr()],
    })
  },
}

export default config
