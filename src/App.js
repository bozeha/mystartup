import React, { Component } from 'react';

import './App.css';
import './js/fb.js';
import Login from './components/login'

let users_list ={
  users:[
    {name:'bob',password:'123'},
    {name:'dan',password:'222'},
    {name:'jon',password:'666'}
    ]
}


class App extends Component {

  constructor(props)
  {
    super(props);

  
  this.state=({

  })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </header>
        
          <Login list_of_users={users_list}/>
        
      </div>
    );
  }
}

export default App;
