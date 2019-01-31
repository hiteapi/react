import App from '../App';

jest.mock('../apis/hiteapi-hello-world');

import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('makes the API call and sets status to done', done  => {
  const wrapper = shallow(<App />);

  setTimeout(() => {
    wrapper.update();
    const state = wrapper.instance().state;
    expect(state.status).toEqual("done");
    done();
  });
});

it('renders hello world how are you', done  => {
  const wrapper = shallow(<App />);
  
  setTimeout(() => {
    wrapper.update();

    const state = wrapper.instance().state;
    
    expect(state.helloWorld.label).toEqual("Hello, world!");
    const welcome = <h1>Hello, world!</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
    
    expect(state.helloWorld.options.label).toEqual("How are you?");
    const question = <h2>How are you?</h2>;
    expect(wrapper.contains(question)).toEqual(true);
    
    done();
  } );
});
