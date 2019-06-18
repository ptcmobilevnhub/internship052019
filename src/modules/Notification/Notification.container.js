import React, { Component } from 'react'
import { connect } from 'react-redux'

import { renderNotificationScreen } from './Notification.screen'

import { addToken, onCancelRegist } from '../Register/Register.reducer'

class NotificationContainer extends Component {

    render() {
        data = {
            isLoading: this.props.isLoading,
            error: this.props.error,
            onClickNext: this.props.onGetToken,
            onRetry: this.props.onRetry,
            onCancel: this.props.onCancel
        }
        return renderNotificationScreen(data)
    }
}

const mapStatetoProps = (state) => {
    return ({
        userData: state.registerReducer.userData,
        isLoading: state.registerReducer.isLoading,
        error: state.registerReducer.error,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetToken: () => {
            dispatch(addToken(ownProps.userData, ownProps));
        },
        onRetry: () => {
            dispatch(addToken(ownProps.userData, ownProps));
        },
        onCancel: () => {
            dispatch(onCancelRegist(ownProps));
        }
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(NotificationContainer);
