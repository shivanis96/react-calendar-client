import  express from 'express' ;
const validateInput = require('../src/shared/validations/signup')
let router = express.Router();


console.log('here')
router.post('/', (req,res)=>{
    const {errors, isValid } =  validateInput(req.body);
    if (isValid) {
        res.json({success: true});
    }else{
        res.status(400).json(errors);
    }

});

export default router
