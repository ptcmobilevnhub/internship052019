import React, { Component } from 'react'
import { connect } from 'react-redux';

import AvatarScreen from './Avatar.screen'

import { addAvatarUrl } from '../Register/Register.reducer';

class AvatarContainer extends Component {
    render() {
        const data = {
            onClickBack: () => { this.props.navigation.goBack() },
            onClickSkip: () => { this.props.navigation.navigate('NotifiPermision') },
            onClickNext: this.props.onAddUrl,
        }
        return (
            <AvatarScreen {...data} />
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        name: state.registerReducer.userData.name,
    })
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddUrl: () => {
            dispatch(addAvatarUrl('https://facebook.github.io/react-native/docs/assets/favicon.png', ownProps));
        }
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(AvatarContainer);

