import React, { useState } from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';
import classNames from 'classnames';

const namespace = 'nav';

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuButton = () => (
    <button
      type="button"
      className={`${namespace}__menu-button`}
      aria-label="Open navigation menu"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  return (
    <header className={`${namespace}__header`}>
      <a href="/" className={`${namespace}__brand`}>José Rodríguez</a>
      <nav className={namespace} aria-label="Main navigation">
        <ul>{children}</ul>
      </nav>
      <MenuButton />
    </header>
  );
};

Nav.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default Nav;
