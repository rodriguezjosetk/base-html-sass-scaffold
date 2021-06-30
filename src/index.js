import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/example';

import './index.scss';
const Root = () => {
	return (
		<Example />
	);
};

let container = document.getElementById('root');
let component = <Root />;
ReactDOM.render(component, container);
