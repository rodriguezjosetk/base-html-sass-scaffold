import React from 'react';
import { bool, string } from 'prop-types';

const NavItem = ({ children, href, active }) => (
  <li className="nav-item">
    <a href={href} aria-current={active}>
      {children}
    </a>
  </li>
);

NavItem.propTypes = {
  children: string.isRequired,
  href: string.isRequired,
  active: bool,
};

NavItem.defaultProps = {
  active: false,
};

export default NavItem;
