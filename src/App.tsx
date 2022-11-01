import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';


import './styles/global.css';

export function App() {
  return (
  <>
    <h1 className='font-bold text-5xl text-violet-500'>Hello World</h1>
  
    <button className='bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300'>
      Send
    </button>
   </>
  )
}

