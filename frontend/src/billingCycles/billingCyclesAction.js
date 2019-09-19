import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api/billingCycle'

export const getList = () => {
    const request = axios.get(BASE_URL)
    return {
        type: 'BILLING_LIST_FETCHED',
        payload: request
    }
}

export const create = (values) => {
    return axios.post(BASE_URL, values)
}