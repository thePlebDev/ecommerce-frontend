import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './index.js';
import Checkout from '../Checkout'






it('should render correctly',()=>{
  const component = shallow(<App />);

  expect(component).toMatchSnapshot();
});
