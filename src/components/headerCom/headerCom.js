
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalOutlined } from '@ant-design/icons';
import { Menu, Layout, Col, Row } from 'antd';
import { menuitems } from 'components/headerCom/menuItem';
import { UseAppContext } from 'contexts/contexts';
import AuthStatus from 'components/headerCom/authStatus';

const { Content } = Layout;
export default function HeaderCom() {
  const { apiValue:{ user } } = UseAppContext();
  const navigate = useNavigate();
  const [current, setCurrent] = useState('home');

  console.log('user user ', user);
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    const menu = menuitems.find(x => x.key === e.key)
    console.log('click ', menu);
    navigate(menu.link);
  };

  return (
    <Content>
      <Row className="formTop">
        <Col span={20} className="formTop-col">
          <Link to="/" replace>
            <GlobalOutlined twoToneColor="#eb2f96"/>Shin's Shopping Mall
          </Link>
        </Col>
        <Col span={4} >
          <AuthStatus />
        </Col>
      </Row>
       { user && <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuitems} />}
    </Content>
  );
}