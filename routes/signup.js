import  express from 'express' ;
import  validateInput from '../src/shared/validations/signup';
let router = express.Router();


console.log('here')
router.post('/api/signup', (req,res)=>{
    const {errors, isValid } =  validateInput(req.body);
    if (isValid) {
        res.json({success: true});
    }else{
        res.status(400).json(errors);
    }

});

export default router
