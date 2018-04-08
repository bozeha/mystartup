import React, { Component } from 'react';


/* ui material  */
import ReactDOM from 'react-dom';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import AppBar from 'material-ui/AppBar';
/* ui material  */
import Button from 'material-ui/Button';



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
          {/* <Login app_state={this} list_of_users={users_list}/> */}
          <MuiThemeProvider>
             <LogInView all_app_data={this}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
