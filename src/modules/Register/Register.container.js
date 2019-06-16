import React, {Component} from 'react';
import { connect } from 'react-redux';
import {renderRegisterScreen} from "./Register.screen";

import { addPhone } from './Register.reducer';
import store from '../../store'

import { ToastAndroid } from 'react-native'

class RegisterContainer extends Component {



    componentDidMount = ()=>{
        // ToastAndroid.show(store.getState(), Toast.SHORT)
    }
    data = {
        phone:this.props.phone,
        onSubmit:this.props.onAddPhone
    }
    render(){
        return renderRegisterScreen(this.data)
    }
}

// const mapStatetoProps = (state) =>{
//     return ({
//         phone:state.phone
//     })
// }

const mapDispatchToProps = dispatch => {
    return {
        onAddPhone: (event) => {
            ToastAndroid.show(event.nativeEvent.text,ToastAndroid.SHORT);
            dispatch(addPhone(event.nativeEvent.text));
        }
    };
  };
  
export default connect(
    null,
    mapDispatchToProps
)(RegisterContainer);