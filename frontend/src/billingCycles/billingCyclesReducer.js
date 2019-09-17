const INITIAL_STATE = { list: [] }

const BillingCyclesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_LIST_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}

export default BillingCyclesReducer
