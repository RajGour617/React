import React from 'react'
import Card from './component/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Raj" age={22} img="https://images.unsplash.com/photo-1777691973962-12dfdd860807?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Riya" age={21} img="https://plus.unsplash.com/premium_photo-1780358574227-f53941183fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Simran" age={25} img="https://images.unsplash.com/photo-1779306451033-2fcad4d79b80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" />
    </div>
  )
}

export default App
