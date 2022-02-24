import { useState } from 'react'
import logo from './favicon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Samuel Horowitz Michale McDunn</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/sam-horowitz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://github.com/shorowitz03"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </header>
    </div>
  )
}

export default App