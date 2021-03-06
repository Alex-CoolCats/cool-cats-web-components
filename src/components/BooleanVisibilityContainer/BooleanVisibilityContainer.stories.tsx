import React from 'react';
import { BooleanVisibilityContainer } from './BooleanVisibilityContainer';

export default {
  title: 'BooleanVisibilityContainer',
  component: BooleanVisibilityContainer,
  argTypes: {
    visible: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
}

export const Example = ((args) => {
  return (
    <BooleanVisibilityContainer {...args}>An animated visibility control</BooleanVisibilityContainer>
  )
}).bind({});