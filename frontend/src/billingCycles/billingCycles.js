import React, { Component } from 'react'

import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader';
import TabsContent from '../common/tabs/tabsContent';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import TabHeader from '../common/tabs/tabHeader';

class BillingCycles extends Component { 
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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
export default BillingCycles