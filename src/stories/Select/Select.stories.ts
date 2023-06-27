import type { Meta, StoryObj } from '@storybook/react';
import { SelectPro } from './Select';

const meta = {
  title: 'Example/Select',
  component: SelectPro,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof SelectPro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selecta: Story = {
  args: {
    defaultValue: "lucy",
    style: { width: 120 },
    options:
      [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]
  },
};
