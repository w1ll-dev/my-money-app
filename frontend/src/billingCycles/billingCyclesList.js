import React, { Component } from 'react'

//REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from './billingCyclesAction'

class BillingCyclesList extends Component {
    componentWillMount(){
        this.props.getList()
    }
    renderRows() {
        const list = this.props.list || []
        return (
            list.map(bc => (
                <tr key= {bc._id}>
                    <td>{bc.name}</td>
                    <td>{bc.month}</td>
                    <td>{bc.year}</td>
                </tr>
            ))
        )
    }
    render() {
        console.log(this.props.list)
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycles.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCyclesList)