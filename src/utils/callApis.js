import axios from "axios"
import config from "../config"

export const callApi = (endpoint, method, token, payload) => {
    console.log("payloadpayloadpayload", payload)
    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};

    const configaxios = {
        method,
        url: `${config.API_URI}/${endpoint}`,
        headers: {
            'Content-Type': 'application/json',
            // Accept: 'application/json',
            // ...authHeaders,
        },
        body: payload

    }

    return new Promise((resolve, reject) => {
        axios(configaxios).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })

}