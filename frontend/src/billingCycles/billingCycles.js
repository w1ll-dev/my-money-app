import React, { Component } from 'react'

import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader';
import TabsContent from '../common/tabs/tabsContent';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import TabHeader from '../common/tabs/tabHeader';
import TabContent from '../common/tabs/tabContent';

//REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectedTab } from '../common/tabs/tabActions'
import { showTabs } from '../common/tabs/tabActions'

class BillingCycles extends Component {
    componentWillMount (){
        this.props.selectedTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    } 
    render(){
        return (
            <div>
                <ContentHeader title='Payment Cycles' small=' register'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader
                                label='  to list'
                                icon = 'bars'
                                target='tabList'
                            />
                            <TabHeader
                                label='  include'
                                icon = 'plus'
                                target='tabCreate'
                            />
                            <TabHeader
                                label='  update'
                                icon = 'pencil'
                                target='tabUpdate'
                            />
                            <TabHeader
                                label='  exclude'
                                icon = 'trash-o'
                                target='tabRemove'
                            />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><h1>List</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Create</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
                            <TabContent id='tabRemove'><h1>Remove</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectedTab, showTabs }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)
