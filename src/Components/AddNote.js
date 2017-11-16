import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

class AddNote extends Component {   

    constructor(){
        super();
        this.state = {
            newNote:{}
        }
    }

    handleSubmit(e)
    {
        if(this.refs.title.value === '')
        {
            //this.props.history.push("/");
        }
        else
        {
            console.log("in else");
            this.setState({newNote:{
                title: this.refs.title.value,
            }}, function(){
                //this.props.addNoteMethod(this.state.newNote);
                //this.props.history.push("/");
            });
        }
        e.preventDefault();
    }
  render() {
    return (
      <div>
        <h3> Add Note </h3>
        <form onSubmit={this.handleSubmit.bind(this)}> 
            <div>
                <label>Title</label><br />
                <input type="text" ref="title"/>
            </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddNote;
