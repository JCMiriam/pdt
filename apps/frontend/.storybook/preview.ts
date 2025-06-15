import type { Preview } from '@storybook/react'
import '@styles/main.scss'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'midlight',
      values: [
        {
          name: 'midlight',
          value: 'var(--midlight-gray)',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#121212',
        },
      ],
    },
  },
}

export default preview
