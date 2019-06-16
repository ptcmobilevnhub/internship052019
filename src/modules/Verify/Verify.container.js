import React, {Component} from 'react';
import { connect } from 'react-redux';
import { renderVerifyScreen } from './Verify.screen'

class VerifyContainer extends Component {
    data = {
        phone:this.props.phone,
        verifyCode: this.props.verifyCode,
        onClickBack: ()=>(undefined),
        onClickNext: ()=>(undefined),
    }
    render(){
        return renderVerifyScreen(this.data)
    }
}

const mapStatetoProps = (state) =>{
    return ({
        // phone:state.reducerRegister.userData.phone,
        // verifyCode:state.reducerRegister.userData.verifyCode
        phone: '0239',
        verifyCode:["1","3","6","5"]
    })
}

export default connect(
    mapStatetoProps,
    null
)(VerifyContainer);