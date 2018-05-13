import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../actions/sigupActions';
import { addFlashMessage } from '../actions/flashMessages.js';
import PropTypes from 'prop-types'


class SignupPage extends React.Component {
    render() {
        const {
            userSignupRequest,
            addFlashMessage,
             isUserExists
        } = this.props;
        return (
            <div className="row flex justify-content-center">
                <div className="col-md-6 col-md-offset-6">
                    <SignupForm
                        isUserExists={isUserExists}
                        userSignupRequest={userSignupRequest}
                        addFlashMessage={addFlashMessage} />
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}


export default connect(null, {
    userSignupRequest,
    addFlashMessage,
    isUserExists
})(SignupPage);
