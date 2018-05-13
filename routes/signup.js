import  express from 'express' ;
import  commonValidations from '../src/shared/validations/signup';
let router = express.Router();
import bcrypt from 'bcrypt';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty'

function validateInput(data, otherValidations) {
    let { errors } = otherValidations(data);
    return axios.get(`https://serene-waters-30997.herokuapp.com/api/calendar/usersbyname/${data.username}`)
        .then(user => {
            if (!isEmpty(user.data)){
                errors.username = 'There is a user with this user name';
            }
            return {
                errors,
                isValid: isEmpty(errors)
            }
        })
        .catch(err =>{
            return {
            errors,
            isValid: isEmpty(errors)
        }})

}

router.post('/api/signup', (req,res)=>{
   validateInput(req.body, commonValidations).then(({errors, isValid}) =>{
       if (isValid) {

           const { username, password } = req.body;
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
   })




});

export default router
