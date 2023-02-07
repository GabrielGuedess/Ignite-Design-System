import type { StoryObj, Meta } from '@storybook/react';

import { Text, TextProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aut provident, tenetur expedita ad quo eius repellendus fugit possimus atque eligendi unde, eaque rem voluptatum animi commodi incidunt nam! Quos',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
