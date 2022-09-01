import './App.css'
import { useState } from 'react'
function App() {
  const [name, setName] = useState('')
  const [hasName, setHasName] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    if (name.length > 0) {
      setHasName(true)
    } else {
      setHasName(false)
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tell me your name
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleNameChange} />
          <input type="submit" />
        </form>

        {hasName && <p>Hej {name}!</p> }
      </header>
    </div>
  );
}

export default App;
