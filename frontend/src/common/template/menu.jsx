import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem 
            path='#'
            icon='dashboard'
            label='Dashboard'
        />
        <MenuTree icon='edit' label='Register'>
            <MenuItem
                path='#billingCycles'
                label='Payment Cycles'
                icon='usd'
            />
        </MenuTree>
    </ul>
)