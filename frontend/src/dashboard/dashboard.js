import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

//REDUX
import { connect } from 'react-redux'

class Dashboard extends Component {
    render (){
        const {credits, debits} = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='version 1.0'/>
                <Content>
                    <Row>
                        <ValueBox
                            cols='12 4'
                            color='green'
                            text='Credits total'
                            title={`R$ ${credits}`}
                            icon='bank'
                        />
                        <ValueBox
                            cols='12 4'
                            color='red'
                            text='Debits total'
                            title={`R$ ${debits}`}
                            icon='credit-card'
                        />
                        <ValueBox
                            cols='12 4'
                            color='blue'
                            text='Consolidated value'
                            title={`R$ ${credits - debits}`}
                            icon='money'
                        />
                    </Row>
                </Content>
            </div>
        ) 
    }
}


const mapStateToProps = state => ({summary: state.dashboard.summary})
export default connect(mapStateToProps)(Dashboard)