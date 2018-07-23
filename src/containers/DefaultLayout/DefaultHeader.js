import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';
import {AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultHeader  = (props) => {

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: null, width: 100, height: 25, alt: 'Redux' }}
          minimized={{ src: null, width: 25, height: 25, alt: 'Redux' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink href="#/">Module</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/">Module</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/">Module</NavLink>
            </NavItem>
          </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              Test
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem><i className="fa fa-lock"/>
                  Test
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
          <AppAsideToggler/>
        </Nav>
       </React.Fragment>
    );
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
