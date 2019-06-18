import React, { Component } from 'react'

import WelcomeScreen from './Welcome.screen'


class WelcomeContainer extends Component {

 
    data = {
        onClick:() => {
            this.props.navigation.navigate('Register');
        }
    }

    render() {      
        return <WelcomeScreen {...this.data}/>
    }

}
export default WelcomeContainer;