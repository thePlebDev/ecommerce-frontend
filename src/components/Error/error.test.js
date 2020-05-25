import React from 'react';
import { shallow } from 'enzyme';

import Error from './index.js';


test('it should render',()=>{
  const wrapper = shallow(<Error />)

  expect(wrapper).toMatchSnapshot();
})
