// @flow

import React from 'react';
import { render } from 'react-dom';
// home
import Index from './pages/index';
// gutter grid demo
import GutterGrid from './pages/grid-tester'

const rootElement = document.querySelector('#root');
/*// home
if (rootElement) {
  render(<Index />, rootElement);
}*/
// gutter grid demo
if (rootElement) {
    render(<GutterGrid />, rootElement);
}