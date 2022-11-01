import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInput {
    children: ReactNode;
}

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot (props: TextInputRootProps) {
    return (
        <div className= 'flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 text-gray-100 text-xs'> 
            {props.children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}

function TextInputInput (props: TextInputInputProps) {
    return (
        <input 
            className='bg-transparent flex-1 outline-none text-gray-100 text-xs'
            {...props}
        />
    )
}

function TextInputIcon(props: TextInputIconProps) {
    return(
        
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}
