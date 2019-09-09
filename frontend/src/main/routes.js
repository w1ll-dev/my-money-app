import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

//COMPONENTS
import Dashboard from '../dashboard/dashboard';
import BillingCycles from '../billingCycles/billingCycles';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='billingCycles' component={BillingCycles}/>
        <Redirect from = '*' to = '/'/>
    </Router>
)

export default Routes