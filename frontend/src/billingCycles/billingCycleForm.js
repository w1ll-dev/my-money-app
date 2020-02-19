import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form className='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field
                        name='name'
                        component={labelAndInput}
                        label='Name'
                        cols='12 4'
                        placeholder='Insert the name'

                    />
                    <Field
                        name='month'
                        component={labelAndInput}
                        label='Month'
                        cols='12 4'
                        placeholder='Insert the month'
                        type='number'
                    />
                    <Field
                        name='year'
                        component={labelAndInput}
                        label='Year'
                        cols='12 4'
                        placeholder='Insert the year'
                        type='number'
                    />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'BillingCycleForm' })(BillingCycleForm)