const INITIAL_STATE = { selected: '' }

const TabReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SELECTED_TAB':
            return {...state, selected: action.payload}
        default:
            return state
    }
}

export default TabReducer

