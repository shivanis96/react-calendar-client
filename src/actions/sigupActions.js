import axios from 'axios'

export function userSignupRequest(userData){
    return dispatch =>{
        // Not axios will send the promise fulfilment or rejection depending on status code
        return axios.post('api/signup', userData)
    }
}

export function isUserExists(userData) {
    return dispatch => {
        return axios.get(`https://serene-waters-30997.herokuapp.com/api/calendar/usersbyname/${userData}`)

    }
}
