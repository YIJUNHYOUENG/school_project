import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER,
    // AUTH_USER,
    // LOGOUT_USER,
} from './types'

export function loginUser(dataToSubmit) {

    console.log(dataToSubmit)

    const request = axios.post(`/login`, dataToSubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }

}

export function registerUser(dataToSubmit) {

    console.log(dataToSubmit)

    const request = axios.post(`/register`, dataToSubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }

}