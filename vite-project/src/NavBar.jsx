import { Link } from "react-router-dom";
import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
      super(props)

  }

  render () {
  return (
    //<nav classNme="navbar">
    <nav className="navbar">
      <h1>Samuel Horowitz</h1>
      
      <div>
        <Link to="/" style={{
          color: "white",
          backgroundColor: "#199e5b",
          borderRadius: "10px",
        }}>Home</Link>
        <Link to="/Projects" style={{
          color: "white",
          backgroundColor: "#199e5b",
          borderRadius: "10px",
        }}>Projects</Link>
        <Link to="/Contact" style={{
          color: "white",
          backgroundColor: "#199e5b",
          borderRadius: "10px",
        }}>Contact</Link>
      </div>
    </nav>
  );
}
}
export default NavBar;