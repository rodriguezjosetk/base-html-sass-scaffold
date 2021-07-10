import React from 'react';
import { string } from 'prop-types';

const NavItem = ({ children, href }) => (
  <li className="nav-item">
    <a href={href}>
      {children}
    </a>
  </li>
);

NavItem.propTypes = {
  children: string.isRequired,
  href: string.isRequired,
};

export default NavItem;
