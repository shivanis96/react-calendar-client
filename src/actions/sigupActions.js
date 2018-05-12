import axios from 'axios'

export function userSignUpRequest(userData){
    return dispatch =>{
        // Not axios will send the pomise fulfilment or rejection depending on status code
        return axios.post('api/calendar', userData)
    }
}
