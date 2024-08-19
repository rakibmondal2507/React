import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: "Rakib",
    age: 21
  }

  return (
    <>
   <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
  <Card channel="Chai aur code" someObj={myObj} username={"Hitesh"}/>
  <Card username={"Rakib"} btnText ="Click Me"/>
  <Card username={"Answara"} btnText="follow Me"/>
    </>
  )
}

export default App
