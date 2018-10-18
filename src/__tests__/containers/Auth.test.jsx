import React from 'react';
import { mount, shallow } from 'enzyme';

import Auth from '../../containers/Auth';

global.window = {};
window.localStorage = global.localStorage;

describe('<Auth />', () => {
  let wrapper;
  beforeEach(() => {
    const history = { push: () => { } };
    wrapper = mount(<Auth.WrappedComponent history={history} />);
  });

  it('should render successfully', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should have initial state property signInError as false', () => {
    const history = { push: () => ('/u') };
    wrapper = shallow(<Auth.WrappedComponent history={history} />);
    expect(wrapper.instance().state).toHaveProperty('signInError', false);
    expect(wrapper.render().find('.signInError').length).toBe(0);
  });
});
