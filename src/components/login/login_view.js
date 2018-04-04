import React, {Component} from 'react';
import BigButtonsLogin from './big_login_button'

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
            <div>{
                console.log(this.props.all_app_data.state.current_view)
    }
                {this.state.button_selection}
                <BigButtonsLogin currentState={this} button_name={this.state.loginbutton}/>
                <BigButtonsLogin currentState={this} button_name={this.state.regester_button}/>
                <BigButtonsLogin currentState={this} button_name={this.state.log_in_with_fb}/>
            </div>
        )
    }


}


export default LogInView;