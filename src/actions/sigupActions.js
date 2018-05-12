import axios from 'axios'

export function userSignupRequest(userData){
    return dispatch =>{
        // Not axios will send the promise fulfilment or rejection depending on status code
        return axios.post('api/calendar', userData)
    }
}
