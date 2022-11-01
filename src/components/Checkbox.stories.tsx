import{ Meta, StoryObj } from '@storybook/react'
import {Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './text'

export default {
    title: 'components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story)=> {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text> Remember me for 30 days</Text>
                </div>
            )
        }
    ],
} as Meta<CheckboxProps>

export const Default: StoryObj = {}