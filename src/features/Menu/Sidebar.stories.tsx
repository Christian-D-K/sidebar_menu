import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sidebar from './Sidebar'

export default {
  title: 'Menu/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar />

export const Open = Template.bind({})
