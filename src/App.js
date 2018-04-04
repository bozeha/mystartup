import React, { Component } from 'react';

import './App.css';
import './js/fb.js';
import Login from './components/login/login';
import LogInView from './components/login/login_view'

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
    user_status:'not-active',
    user_name:'',
    current_view:'big_buttons'

  })
  }

  render() {
    return (
      <div className="App">
        
        {this.state.user_status=='active'?
        <p>welcome {this.state.user_name}</p>:<p>please log in</p>
                }
          <Login app_state={this} list_of_users={users_list}/>
        <LogInView all_app_data={this}/>
      </div>
    );
  }
}

export default App;
