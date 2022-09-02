import './App.css'
import { useState, useRef, useEffect } from 'react'
import JSConfetti from 'js-confetti'


function App() {
  const [name, setName] = useState('')
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState({})
  const jsConfetti = new JSConfetti()
  const nameRef = useRef()

  useEffect(() => {
    const fetchInspoQuotes = async () => {
      const res = await fetch('https://type.fit/api/quotes')
      setQuotes(await res.json())
    }
    fetchInspoQuotes()
    
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    setQuote(getRandomQuote)
    setName(nameRef.current.value)
    jsConfetti.addConfetti()
  }

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random()*1000)]
  }

  const handleReturn = () => {
    setName('')
  }

  const handleConfetti = () => {
    jsConfetti.addConfetti()
  }

  const handleNewQuote = () => {
    setQuote(getRandomQuote)
  }

  return (
    <div className="App">
      <header className="App-header">
        {!name ?
          <div>
            <p>
              Hey buddy! What's your name?
            </p>
            <form onSubmit={handleSubmit}>
              <input type="text" ref={nameRef} />
              <input type="submit" />
            </form>
          </div>
        :
          <div>
            <p>Hear now {name}!</p>
            <p>Getting back to school after summer can be challenging... Here is an insperational quote that might inspire you to keep banging your head against that wall! :)</p>
            <blockquote>
              <i>{quote.text}</i>
              <br/>
              <i className="Author-name">-{quote.author}</i>
            </blockquote>
            <button onClick={handleReturn}>Return</button>
            <button onClick={handleConfetti}>More confetti</button>
            <button onClick={handleNewQuote}>New Quote</button>

          </div>
        }

      </header>
    </div>
  );
}

export default App
