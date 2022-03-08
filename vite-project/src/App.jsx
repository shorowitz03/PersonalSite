import { useState } from 'react'
import logo from './favicon.svg'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './NavBar';
import HomeThing from './HomeThing';
//import logo from './mikey.png'
import './App.css'
import ProjectsThing from './ProjectsThing';
import ContactThing from './ContactThing';
import{ init } from '@emailjs/browser';
init("user_Bb9hTZ6uo7dC6r9wRQF10");


function App() {
  const [count, setCount] = useState(0)

  return ( 
    <Router>
    <div className="App">
    <NavBar />


      <header className="App-header">
        <Switch>
        
        
          <Route exact path="/">
            <HomeThing/> 
            {console.log("Test")}
          </Route>
          <Route exact path="/Projects">
            <ProjectsThing/>
          </Route>
          <Route exact path="/Contact">
            <ContactThing/>
          </Route>
        
        
        </Switch>
      </header>
    </div>
    </Router>
  )
}

export default App
