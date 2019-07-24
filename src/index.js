'use-strict';
/***********************
* WEB - SRC - INDEX.JS
***********************/

import 'core-js';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import ScrollToTop from './system/scrollToTop';
import App from './components/app';

import './styles/style.css';

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</BrowserRouter>,
	document.getElementById('root')
);

serviceWorker.unregister();
