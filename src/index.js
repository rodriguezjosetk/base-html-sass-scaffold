import React from 'react';
import ReactDOM from 'react-dom';

import { Nav, NavItem } from './components/nav';

import './styles/index.scss';

const Root = () => (
  <>
    <Nav>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#contact">Contact</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#about-this-project">About this project</NavItem>
    </Nav>
    <main>
      main content
    </main>
  </>
);

const container = document.getElementById('root');
const component = <Root />;
ReactDOM.render(component, container);
