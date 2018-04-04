import React ,{Component} from 'react';



class BigLoginButton extends Component
{
render(props)
{
    return( 
        
        <button onClick={()=>this.props.currentState.setState({currentState:5})}>
        {console.log(this.props.currentState.state)}
        {this.props.button_name}
       </button>
)
}

}


export default BigLoginButton;