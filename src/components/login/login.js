import React , {Component} from 'react';

class Login extends Component
{
    state={
        temp_user_name:'',
        temp_password:''
    }

    findUser =()=>
    {   
        this.props.app_state.setState({user_status:'not-active',user_name:''});
        console.log('x');
        this.props.list_of_users.users.map((e,index)=>
            {
                e.name==this.state.temp_user_name&&e.password==this.state.temp_password?this.props.app_state.setState({user_status:'active',user_name:e.name}):''

            }
        )

    }

    render(props)
    {

        return (

            <div>
                user name <input id='username' onChange={(event)=>{console.log(event.target.value);this.state.temp_user_name=event.target.value}} type='text'/>
                user password <input id='userpassword' onChange={(event)=>{console.log(event.target.value);this.state.temp_password=event.target.value}} type='text'/>
                
                <button onClick={()=>{this.findUser()}} >log me in</button>
            </div>
        )
    }

}

export default Login;   