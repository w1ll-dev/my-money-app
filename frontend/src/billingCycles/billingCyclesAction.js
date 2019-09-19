import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api/billingCycle'
import { reset as resetForm } from 'redux-form'
import { selectedTab, showTabs } from '../common/tabs/tabActions'
import { toastr } from 'react-redux-toastr'

export const getList = () => {
    const request = axios.get(BASE_URL)
    return {
        type: 'BILLING_LIST_FETCHED',
        payload: request
    }
}

export const create = (values) => {
    return dispatch => {
        axios.post(BASE_URL, values)
            .then(resp => {
                dispatch([
                    resetForm('BillingCycleForm'),
                    getList(),
                    selectedTab('tabList'),
                    showTabs('tabList', 'tabCreate'),
                    toastr.success('Success', 'successful operation.')
                ])
            })
            .catch(error => {
                error.response.data.errors.forEach(element => {
                    toastr.error('Error', element)
                });
            })
    }
}