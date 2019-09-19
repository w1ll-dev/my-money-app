import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form className='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input' />
                    <Field name='month' component='input' />
                    <Field name='year' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'BillingCycleForm' })(BillingCycleForm)