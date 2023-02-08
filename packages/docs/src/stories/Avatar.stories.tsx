import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@guedes-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/GabrielGuedess.png',
    alt: 'Gabriel Guedes',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
