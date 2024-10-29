import './App.css'
import './styles.css'
import 'em-button'
import 'em-nametag'
import '@novacat35/lit-web-components'
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('Emily');
  const [inputValue, setInputValue] = useState('');


  function resetName() {
    setFirstName('');
    setInputValue('');
  }

  function updateName() {
    setFirstName(inputValue);
    setInputValue('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      updateName();
    }
  }

  return (
    <> 
    <h1>Vite + React + Novacat + EmGore</h1>
    <div className='layoutHor'>
      <div>
        <div>Please sign in</div>
        <input type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}/>
        <br />
        <em-button class="primary" onClick={updateName}>Submit</em-button>
        <em-button class="error" onClick={resetName}>Reset</em-button>
      </div>
      <div>
        <em-nametag id="nametag" firstName={firstName}></em-nametag>
      </div>
    </div> 
    </>
  )
}

export default App
