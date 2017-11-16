import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {    
    render() {
      return (
        <div>
            <Header />
            <h1>List notes here*</h1>
            {this.props.data}
        </div>
      );
    }
  }
  
  export default Home;

