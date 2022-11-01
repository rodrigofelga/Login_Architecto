import{ Meta, StoryObj } from '@storybook/react'
import {Text, TextProps } from './text'

export default {
    title: 'components/text',
    component: Text,
    args: {
        children: 'Lorem ipsum'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
    
} as Meta<TextProps>

export const Default: StoryObj = {

}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
       asChild: true,
       children: (
        <p>Testing 1,2,3</p>
       ) 
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}