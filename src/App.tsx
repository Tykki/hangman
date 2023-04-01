import { useState, useEffect, useCallback } from 'react'
import words from './assets/wordList.json'
import Drawing from './components/Drawing'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import './App.scss'

function App() {
  const getWord:()=>String = () => words[Math.floor(Math.random() * words.length)].toLowerCase()

  const [word, setWord]:[String, Function] = useState(getWord)
  const [guesses, setGuesses]:[string[], Function] = useState([])
  const wrongGuesses:string[] = guesses.filter( char => !word.includes(char))
  const lose = wrongGuesses.length > 5
  const win = word.split('').every(char => guesses.includes(char))
  console.log(word)
  
  const addChar:(key:string)=>void = useCallback((char:string) => {
    if (guesses.includes(char) || win || lose) return
    setGuesses((currChars:String[]) => [...currChars, char])
  }, [guesses, win, lose])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addChar(key)

    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guesses])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== 'Enter') return
      
      e.preventDefault()
      setGuesses([])
      setWord(getWord())


    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guesses])

  return (
    <div className="container">
      <h1>The Topic is Web Development!</h1>
      <p className="end-message">
        {lose ? "You Have Lost, Refresh To Try Again" : ""}
        {win ? "You Have Won, Refresh To Try Again" : ""}
        </p>
      <Drawing wrongGuesses={wrongGuesses.length}/>
      <Word reveal={lose} guesses={guesses} word={word}/>
      <Keyboard activeKeys={guesses.filter(char => word.includes(char))}
        inactiveKeys={wrongGuesses}
        addChar={addChar}
        disabled={lose || win}
      />
      <h4>Press Enter to Reset or <button onClick={() => (setGuesses([]) & setWord(getWord())) } >Click Me</button></h4>
    </div>
  )
}

export default App
