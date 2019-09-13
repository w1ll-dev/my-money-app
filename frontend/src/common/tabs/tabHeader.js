import React, { Component } from 'react'

//REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectedTab from './tabActions'


class TabHeader extends Component {
    render (){
        const { selectedTab, target, tab } = this.props
        const selected = tab.selected === target
        return (
            <li className={selected ? 'active' : ''}>
                <a 
                    href='javascript:;'
                    onClick={() => selectedTab(target)}
                    data-toggle = 'tab' 
                    data-target = {this.props.target}
                >
                    <i className={`fa fa-${this.props.icon}`}/>
                    {this.props.label}
                </a>
            </li>
        )
    } 
} 

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectedTab}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)