const express = require('express');
const validateInput = require('../shared/validations/signup')
let router = express.Router();



router.post('/', (req,res)=>{
    const {errors, isValid } =  validateInput(req.body);
    if (!isValid){
        res.status(400).json(errors);
    }

});

export default
