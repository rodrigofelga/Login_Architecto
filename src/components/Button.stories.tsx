import{ Meta, StoryObj } from '@storybook/react'
import {Button, ButtonProps } from './Button'

export default {
    title: 'components/Button',
    component: Button,
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
    
} as Meta<ButtonProps>

export const Default: StoryObj = {

}

export const CustomComponent: StoryObj<ButtonProps> = {
    args: {
       asChild: true,
       children: (
        <p>LEARN MORE</p>
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
