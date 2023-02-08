import { ElementType } from 'react'

import { ComponentProps } from '@stitches/react'

import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',
})

Box.displayName = 'Box'

export type BoxProps = { as?: ElementType } & ComponentProps<typeof Box>
