import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

//COMPONENTS
import Dashboard2 from '../dashboard2/dashboard2';
import BillingCycles from '../billingCycles/billingCycles';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard2}/>
        <Route path='billingCycles' component={BillingCycles}/>
        <Redirect from = '*' to = '/'/>
    </Router>
)

export default Routes