import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tabs/tabReducer';
import BillingCyclesReducer from '../billingCycles/billingCyclesReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycles: BillingCyclesReducer,
    form: formReducer,
})

export default rootReducer