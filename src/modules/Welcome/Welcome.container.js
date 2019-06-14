import React, { Component } from 'react'

import WelcomeScreen from './Welcome.screen'


class WelcomeContainer extends Component {

    onClickRegisterbyPhone = () => {
        // TODO add navigation:this.props.navigation.navigate('Register');
    };

    data = {
        onClick:this.onClickRegisterbyPhone
    }

    render() {
        return WelcomeScreen(this.data);
    }

}
export default WelcomeContainer;