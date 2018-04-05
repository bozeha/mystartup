import React ,{Component} from 'react';

import RaisedButton  from 'material-ui/Button';

class BigLoginButton extends Component
{
render(props)
{
    return( 
        
        
        <RaisedButton ClassName="login_primary"  onClick={()=>this.props.currentState.setState({button_selection:this.props.button_name})}>
          {console.log(this.props.currentState.state)}
            {this.props.button_name}
       </RaisedButton>
)
}

}


export default BigLoginButton;