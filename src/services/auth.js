import axios from "axios";
import { ENV } from "../utils/constans";

const register = async ( readername, email, password ) => {
    return axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`, {
        readername,
        email,
        password,
        roles: ['PageGuardian']
    });
}

const loginF = async (email, password) => {
    return axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`, {
        email,
        password
    });
}

export default {
    register,
    loginF
}
