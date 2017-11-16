import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Home from './Home'
import AddNote from './AddNote'
import Note from './Note'

class Main extends Component {    
    render() {
      let notes;
    
      if(this.props.notesList)
      {
          //console.log(this.props);
          notes = this.props.notesList.map(note => {
              return(
                  <Note key={note.title} note={note} />
              );
          });
      }
      return (
          <Router>
        <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/AddNote' component={AddNote}/>
                    {/*<Route exact path='/' render={(props) => (<Home {...props} data={notes}/>)}/>
                    <Route exact path='/AddNote' render={(props) => (<AddNote {...props} addNoteMethod={this.props.addNoteMethod}/>)}/>*/}
                </Switch>
        </div>
       </Router>
      );
    }
  }
  
  export default Main;
/*
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/AddNote' component={AddNote}/>
    </Switch>
    <div>
    <Notes notesList={this.state.NotesList} />
    </div>
  </main>
)

export default Main
*/
