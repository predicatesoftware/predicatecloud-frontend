import React, { useState } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import styles from './styles.module.scss';
import authService from '../../api/services/authService';

const NavigationBar = (props: RouteComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const user = authService.getCurrentUser();
  const isLoggedIn = user !== null;

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <Navbar color="white" light expand="md" className={styles.navbar}>
          <NavbarBrand>
            <div
              className={styles.brand}
              onClick={() => props.history.push('/')}
            >
              <img
                src="images/PredicateLogo20.png"
                alt="Company logo"
                title="Predicate Software"
                className={styles.logoImg}
              />
              Predicate Software
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!isLoggedIn && (
                <>
                  <NavItem className="pb-1 pt-1 ml-md-auto border border-secondary rounded">
                    <NavLink
                      exact
                      to={'/register'}
                      activeClassName={styles.active}
                      className={styles.navlink}
                    >
                      Sign Up
                    </NavLink>
                  </NavItem>
                  <NavItem className="pb-1 pt-1 ml-md-auto">
                    <NavLink
                      exact
                      to={'/login'}
                      activeClassName={styles.active}
                      className={styles.navlink}
                    >
                      Sign In
                    </NavLink>
                  </NavItem>
                </>
              )}
              {isLoggedIn && (
                <>
                  {/* <NavItem className="ml-md-auto">
                    <NavLink
                      exact
                      to={'/profile'}
                      activeClassName={styles.active}
                      className={styles.navlink}
                    >
                      Sign Up
                    </NavLink>
                  </NavItem> */}
                  <NavItem className="ml-md-auto">
                    <NavLink
                      exact
                      to={'/logout'}
                      activeClassName={styles.active}
                      className={styles.navlink}
                    >
                      Logout
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default withRouter(NavigationBar);
