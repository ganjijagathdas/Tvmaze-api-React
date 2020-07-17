import React from 'react';
import { configure, mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import HomePage from './components/homepage'
import Adapter from "enzyme-adapter-react-16";
import App from './App';
import ShowDetail from './components/show-details';

configure({ adapter: new Adapter() });

describe('routes using memory router', () => {
  it('should render HomePage Component without error', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
  })
  it('should render ShowInfo Component without error', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/show/:id' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(ShowDetail)).toHaveLength(1);
  })
})