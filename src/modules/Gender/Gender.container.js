import React, { Component } from 'react';
import { connect } from 'react-redux';

import GenderScreen from './Gender.screen'

import { addGender } from '../Register/Register.reducer'

class GenderContainer extends Component {

    render() {
        data = {
            name: this.props.name,
            onClickBack: () => { this.props.navigation.goBack() },
            onClickNext: this.props.onAddGender,
            onClickSkip: () => { this.props.navigation.navigate('Avatar') },
        }
        return (
            <GenderScreen {...data} />
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddGender: (name) => () => {
            dispatch(addGender(name, ownProps));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(GenderContainer);