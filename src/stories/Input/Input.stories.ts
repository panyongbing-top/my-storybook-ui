import type { Meta, StoryObj } from '@storybook/react';
import { InputPro } from './Input';

const meta = {
  title: 'Example/Input',
  component: InputPro,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof InputPro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inputa: Story = {
  args: {
    value: 'aa',
    type: 'textarea'
  },
};

export const InputP: Story = {
  args: {
    placeholder: 'Basic usage'
  },
};

export const InputBordered: Story = {
  args: {
    placeholder: 'Borderless',
    bordered: false
  },
};


