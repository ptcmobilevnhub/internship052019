import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRegisterScreen } from "./Register.screen";

import { addPhone, onCancelRegist } from './Register.reducer';

class RegisterContainer extends Component {
    // TODO component re-render after retry error.
    render() {
        data = {
            phone: this.props.phone,
            isLoading: this.props.isLoading,
            error: this.props.error,
            onSubmit: this.props.onAddPhone,
            onRetry: this.props.onRetry(this.props.phone),
            onCancel: this.props.onCancel
        }
        return renderRegisterScreen(data)
    }
}

const mapStatetoProps = (state) => {
    return ({
        phone: state.registerReducer.userData.phone,
        isLoading: state.registerReducer.isLoading,
        error: state.registerReducer.error,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddPhone: (event) => {
            dispatch(addPhone(event.nativeEvent.text,ownProps));
        },
        onRetry: (phone) => () => {
            dispatch(addPhone(phone,ownProps));
        },
        onCancel: () => {
            dispatch(onCancelRegist(ownProps));
        }
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(RegisterContainer);