import React from 'react'
import { shallow } from 'enzyme'

import Home from './index.js'

it('should render ',()=>{
  const component = shallow(<Home />)

  expect(component.getElements()).toMatchSnapshot()

});
