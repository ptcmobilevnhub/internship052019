import React, {Component} from 'react';
import { connect } from 'react-redux';

import NameScreen from './Name.screen'

import { addName } from '../Register/Register.reducer';


class NameContainer extends Component {
    
    render(){
        data = {
            name: this.props.name,
            onClickBack: ()=>{this.props.navigation.goBack()},
            onClickNext: this.props.onAddName,
            onClickSkip: ()=>{this.props.navigation.navigate('ChooseGender')},
        }
        return (
            <NameScreen {...data}/>
        )
    }
}

const mapStatetoProps = (state) =>{
    return ({
        name:state.registerReducer.userData.name,
    })
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onAddName: (name)=> () => {
            dispatch(addName(name,ownProps));
        }
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(NameContainer);


