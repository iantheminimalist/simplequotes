import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { RandomQuote } from './RandomQuote';
import AddQuoteForm from './AddQuote';


function Main() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <Nav tabs>
            <NavItem>
                <NavLink 
                  className={classnames({ active: activeTab === '1'})}
                  onClick={() => { toggle('1');}}
                >
                Random Quote
                </NavLink>
            </NavItem>

            <NavItem>
            <NavLink 
                className={classnames({ active: activeTab === '2'})}
                onClick={() => { toggle('2');}}
                >Search Quote</NavLink>
            </NavItem>
            </Nav>
            
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <RandomQuote />
                </TabPane>
                <TabPane tabId="2">
                    <AddQuoteForm />
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Main

