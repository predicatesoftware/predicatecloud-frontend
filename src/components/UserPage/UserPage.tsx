import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import styles from './styles.module.scss';
import UserProfile from './../UserProfile/';
import AlgorithmMenu from '../AlgorithmMenu';

export default () => {
  const [activeTab, setActiveTab] = useState<string>('1');

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className={styles.user_page_wrapper}>
      <div className={styles.nav_wrapper}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1');
              }}
            >
              Алгоритмы
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2');
              }}
            >
              Профиль
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AlgorithmMenu />
        </TabPane>
        <TabPane tabId="2">
          <UserProfile />
        </TabPane>
      </TabContent>
    </div>
  );
};
