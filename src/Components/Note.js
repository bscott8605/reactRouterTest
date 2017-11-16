import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class Note extends Component {
  render() {
    return (
      <li className="Note">
        {this.props.note.title} 
      </li>
    );
  }
}

export default Note;
/*
const Note = () => (
  <div>
    <header>
    <li><Link to='/'>Home</Link></li>
    </header>
    <form>
      <label>
        Note:
      </label>
    </form>
    <textarea name="comment" form="usrform">Enter text here...</textarea>
  </div>
  )
  
  export default Note
  */