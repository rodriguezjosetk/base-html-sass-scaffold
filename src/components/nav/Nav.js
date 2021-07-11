import React, {
  Children, cloneElement, useState, useEffect,
} from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';

const namespace = 'nav';

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('#');

  useEffect(() => {
    const updateLocation = () => {
      setCurrentPage(window.location.hash);
    };

    window.addEventListener('hashchange', updateLocation);

    return () => {
      window.removeEventListener('hashchange', updateLocation);
    };
  });

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
      <a href="/#" className={`${namespace}__brand`} aria-current={currentPage === ''}>José Rodríguez</a>
      <nav className={namespace} aria-label="Main navigation">
        <ul>
          {Children.map(
            children,
            (child) => cloneElement(child, { active: currentPage === child.props.href }),
          )}
        </ul>
      </nav>
      <MenuButton />
    </header>
  );
};

Nav.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default Nav;
