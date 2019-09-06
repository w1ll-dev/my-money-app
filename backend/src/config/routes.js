const express = require('express')

module.exports = function(server) {
    
    //Sets the base URL for all routes.
    const router = express.Router()
    server.use('/api', router)

    //Routes of Payment Cycle.
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycle')
}