import React from 'react'
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

const Dashboard = () => (
    <div>
        <ContentHeader title='Dashboard' small='version 1.0'/>
        <Content>
            <Row>
                <ValueBox
                    cols='12 4'
                    color='green'
                    text='Credits total'
                    title='R$ 10'
                    icon='bank'
                />
                <ValueBox
                    cols='12 4'
                    color='red'
                    text='Debits total'
                    title='R$ 10'
                    icon='credit-card'
                />
                <ValueBox
                    cols='12 4'
                    color='blue'
                    text='Consolidated value'
                    title='R$ 0'
                    icon='money'
                />
            </Row>
        </Content>
    </div>
) 

export default Dashboard