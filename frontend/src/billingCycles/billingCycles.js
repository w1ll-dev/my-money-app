import React, { Component } from 'react'

import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader';
import TabsContent from '../common/tabs/tabsContent';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

class BillingCycles extends Component { 
    render(){
        return (
            <div>
                <ContentHeader title='Payment Cycles' small=' register'/>
                <Content>
                    <Tabs>
                        <TabsHeader>

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