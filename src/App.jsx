import './App.css'
import './styles.css'
import 'em-button'
import 'em-nametag'
import '@novacat35/lit-web-components'


function App() {
  function resetPage() {
    console.log('reset me');
  }

  return (
    <> <h1>Vite + React + Novacat + EmGore</h1>
    <div className='layoutHor'>
      <custom-form></custom-form>
      <div>
        <em-nametag id="nametag" firstName="Emily"></em-nametag>
        <em-button class="primary" onClick={resetPage}>Reset page</em-button>
      </div>
    </div> 
    
    </>
  )
}

export default App
