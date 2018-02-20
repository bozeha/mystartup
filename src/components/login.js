import React , {Component} from 'react';

class Login extends Component
{

    findUser =()=>
    {   
        console.log('x');
        this.props.list_of_users.users.map((e,index)=>
            {

                console.log(e.name);
            }
        )

    }

    render(props)
    {

        return (

            <div>
                user name <input id='username' type='text'/>
                user password <input id='userpassword' type='text'/>
                
                <button onClick={()=>{this.findUser()}} >log me in</button>
            </div>
        )
    }

}

export default Login;   