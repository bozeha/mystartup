import React, {Component} from 'react';
import BigButtonsLogin from './big_login_button';
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
            regester_button:'regester',
            log_in_with_fb:'login with facebook'
        })

    }
    render(props)
    {
        return (
            <div>{ console.log(this.props.all_app_data.state.current_view) }

                
                {this.state.button_selection}
                <div ClassName='one_of_login'>
                      <BigButtonsLogin currentState={this} button_name={this.state.loginbutton}/>
                </div>
                <div ClassName='one_of_login'>
                     <BigButtonsLogin currentState={this} button_name={this.state.regester_button}/>
                </div>
                <div ClassName='one_of_login'>
                     <BigButtonsLogin currentState={this} button_name={this.state.log_in_with_fb}/>
                </div>
                
            </div>
        )
    }


}


export default LogInView;