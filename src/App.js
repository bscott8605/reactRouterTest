import React, { Component } from 'react';

import Main from './Components/Main';

class App extends Component {  
  constructor()
  {
    super();
    this.state = {
      notesList: []
    };
  }

  componentWillMount(){
    this.setState({notesList: [
      {
        title: 'Business Website'
      },
      {
        title: 'Social App'
      },
      {
        title: 'Ecommerce Shopping cart'
      }
    ]
    });
  };

  handleAddNote(newNote){
    console.log("called by addnote");
    let newNoteList = this.state.notesList;
    newNoteList.push(newNote);
    this.setState({notesList:newNoteList});
  }

  render() {
    return (
      <div>
        in app
        <Main notesList={this.state.notesList} addNoteMethod={this.handleAddNote.bind(this)}/>
      </div>
    );
  }
}

export default App;
