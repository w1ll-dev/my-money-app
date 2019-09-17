import axios from 'axios'
const BASE_URL = 'http://localhost:3003/billingCycle'

export const getList = () => {
    const request = axios.get(BASE_URL)
    return {
        type: 'BILLING_LIST_FETCHED',
        payload: request
    }
}

