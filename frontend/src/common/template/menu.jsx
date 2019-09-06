import React from 'react'
import MenuItem from './menuItem'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem 
            path='#'
            icon='dashboard'
            label='Dashboard'
        />
    </ul>
)