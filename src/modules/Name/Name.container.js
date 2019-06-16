import React, {Component} from 'react';
import { connect } from 'react-redux';

import NameScreen from './Name.screen'

class NameContainer extends Component {
    data = {
        name: this.props.name,
        onClickBack: ()=>(undefined),
        onClickNext: this.props.onAddName,
        onClickSkip: ()=>(undefined),
    }
    render(){
        return (
            <NameScreen {...this.data}/>
        )
    }
}

const mapStatetoProps = (state) =>{
    return ({
        // name:state.reducerRegister.userData.name,
        name:"Test name"
    })
}
const mapDispatchToProps = dispatch => {
    return {
        onAddName: (name) => {
            ToastAndroid.show(name,ToastAndroid.SHORT);
            dispatch(addName(name));
        }
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(NameContainer);


