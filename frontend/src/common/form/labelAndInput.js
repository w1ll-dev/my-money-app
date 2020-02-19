import React from 'react';
import Grid from '../layout/grid';

const labelAndInput = ({ cols, name, label, input, placeholder, readOnly, type }) =>
     <Grid cols={cols}>
          <div className="form-group">
               <label htmlFor={name}>{label}</label>
               <input
                    {...input}
                    className='form-control'
                    placeholder={placeholder}
                    readOnly={readOnly}
                    type={type}
               />
          </div>
     </Grid>

export default labelAndInput; 