import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';
import { getSummary } from './dashboardActions'

//REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Dashboard extends Component {
    componentWillMount(){
        this.props.getSummary()
    }
    render (){
        const {credit, debt} = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='version 1.0'/>
                <Content>
                    <Row>
                        <ValueBox
                            cols='12 4'
                            color='green'
                            text='Credits total'
                            title={`R$ ${credit}`}
                            icon='bank'
                        />
                        <ValueBox
                            cols='12 4'
                            color='red'
                            text='Debits total'
                            title={`R$ ${debt}`}
                            icon='credit-card'
                        />
                        <ValueBox
                            cols='12 4'
                            color='blue'
                            text='Consolidated value'
                            title={`R$ ${credit - debt}`}
                            icon='money'
                        />
                    </Row>
                </Content>
            </div>
        ) 
    }
}


const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)