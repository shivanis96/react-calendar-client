import  express from 'express' ;
import  validateInput from '../src/shared/validations/signup';
let router = express.Router();
import bcrypt from 'bcrypt';
import axios from 'axios';

router.post('/api/signup', (req,res)=>{
    const {errors, isValid } =  validateInput(req.body);
    if (isValid) {
        const { username, password, timezone, email } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);
        const userData = {
            username: username,
            password: password_digest
        }
        axios.post('https://serene-waters-30997.herokuapp.com/api/calendar/users', userData)
            .then(user => res.json({success: true}))
            .catch(err => res.status(500).json({error:err}))
    }else{
        res.status(400).json(errors);
    }

});

export default router
