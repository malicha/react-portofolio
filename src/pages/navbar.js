import React, { Component } from 'react'
import {Layout, Header, HeaderRow, HeaderTabs, Content,Tab} from 'react-mdl'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedTabs>
        <Header>
            <HeaderRow title="Portofolio" />
            <HeaderTabs ripple activeTab={1} onChange={(tabId) => {}}>
                <Tab>AboutMe</Tab>
                <Tab>Contact</Tab>
            </HeaderTabs>
        </Header>
        <Content>
            <div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>
        </Content>
    </Layout>
      </div>
    )
  }
}
