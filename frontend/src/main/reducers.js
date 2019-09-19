import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tabs/tabReducer';
import BillingCyclesReducer from '../billingCycles/billingCyclesReducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycles: BillingCyclesReducer,
    form: formReducer,
    toastr: toastrReducer,
})

export default rootReducer