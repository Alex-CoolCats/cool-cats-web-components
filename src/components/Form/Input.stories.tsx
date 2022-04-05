import React from 'react';
import { Input } from './Input';

export default {
  title: 'Form/TextInput',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' }
    }
  }
}

export const Basic = ((args) => {
  return (
    <Input name='test' {...args} />
  )
}).bind({});