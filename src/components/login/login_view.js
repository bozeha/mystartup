import React, {Component} from 'react';
import BigButtonsLogin from './big_login_button';
import Register from './register';
import LogIn from './login';
import LoginFB from './login_with_fb';

import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider';
import  '../../style/login.css';
//import RaisedButton from '../../../node_modules/material-ui/RaisedButton';

/* ui material  */
import Button from 'material-ui/Button';
/* ui material  */




class LogInView extends Component
{

    constructor(props)
    {

        super(props);
        this.state=({
            button_selection:0,
            loginbutton:'Log Me IN',
            regester_button:'register',
            log_in_with_fb:'Login with facebook'
        })

    }
    render(props)
    {
        return (
            <div>{ console.log(this.props.all_app_data.state.current_view) }
                {this.state.button_selection!=0?<button onClick={()=>this.setState({button_selection:0})}>back</button>:''}
                {this.state.button_selection=='Log Me IN'?<LogIn/>:this.state.button_selection=='register'?<Register/>:this.state.button_selection=='Login with facebook'?<LoginFB/>:
               <div>
                <div className='one_of_login'>
                        <BigButtonsLogin currentState={this} button_name={this.state.loginbutton}/>
                    </div>
                    <div className='one_of_login'>
                        <BigButtonsLogin currentState={this} button_name={this.state.regester_button}/>
                    </div>
                    <div className='one_of_login'>
                        <BigButtonsLogin currentState={this} button_name={this.state.log_in_with_fb}/>
                    </div>
               </div>
                }
            </div>
        )
    }


}


export default LogInView;