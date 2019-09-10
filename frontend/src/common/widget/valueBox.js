import React from 'react'
import Grid from '../layout/grid';


const ValueBox = ({cols, color, title, text, icon}) => (
    <Grid cols={cols}>
        <div className={`small-box bg-${color}`}>
            <div className='inner'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className='icon'>
                <i className={`fa fa-${icon}`}></i>
            </div>
        </div>
    </Grid>    
)

export default ValueBox