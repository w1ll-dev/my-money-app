import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox'

import axios from 'axios';


const BASE_URL = 'http://localhost:3003/api'
class Dashboard2 extends Component{
    constructor (props){
        super(props)
        this.state = { credit: 0, debt: 0}
    }
    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycle/summary`)
            .then(resp => this.setState(resp.data))
    }
    render(){
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small=' version 2.0'/>
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

export default Dashboard2