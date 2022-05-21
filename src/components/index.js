
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesCom from 'routes/routesCom';
import HeaderCom from 'components/headerCom/headerCom.js';
import { UseAppContext } from 'contexts/contexts';

import 'style/style.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { getAuthToken } from "utils/utils";
import { getMe } from 'apis/WebAPI';

const { Header, Content, Footer } = Layout;

const App = () => {
  const { apiValue:{ user, setUser } } = UseAppContext();

  useEffect(() => {
    if (user && getAuthToken) {
      // 有 token 才 call API
      getMe().then((response) => {
        if (response.ok) {
          setUser(response.data);
        }
      });
    }
  }, []);
  return (
      <div className="App wrapper">
        <BrowserRouter>
            <Layout className="main-layout">
              <Header className="header">
                <HeaderCom/>
              </Header>
              <Content>
                <div className="site-layout-content">
                  <RoutesCom />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>© 2022 Shin's Shopping Mall</Footer>
            </Layout>
        </BrowserRouter>
      </div>
  );
};

export default App;
