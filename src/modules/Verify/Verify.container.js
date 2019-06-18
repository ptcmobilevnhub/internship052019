import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderVerifyScreen } from './Verify.screen'

class VerifyContainer extends Component {

    render() {
        data = {
            verifyCode: this.props.verifyCode,
            onClickBack: () => (this.props.navigation.goBack()),
            onClickNext: () => (this.props.navigation.navigate('NameInput')),
        }
        return renderVerifyScreen(data)
    }
}

const mapStatetoProps = (state) => {
    return ({
        verifyCode: state.registerReducer.userData.verifyCode,
    })
}

export default connect(
    mapStatetoProps,
    null
)(VerifyContainer);