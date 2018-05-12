import Validator from 'validator'
const isEmpty = require('lodash/isEmpty')


const validateInput = (data) => {
    let errors = {};
    // Extra detail to errors here before trying to add to a db
    if(Validator.isEmpty(data.username)){
        errors.username = 'This field is required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This field is required';
    }
    if(Validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = 'This field is required';
    }
    // This is okay as both errors wont show
    if(!Validator.equals(data.password, data.passwordConfirmation)){
        errors.passwordConfirmation = 'This passwords do not match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

export default validateInput;
