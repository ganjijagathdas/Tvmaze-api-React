import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Form from '../../components/homepage/inputForm';

configure({ adapter: new Adapter() });

const e = { target: { value: "music" }, preventDefault: () => {} };

const inputValue={
    value:'music'
}

let handleChange=jest.fn();

let handleSubmit=jest.fn();

describe('<ShowForm/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Form handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue.value} />);
    });

    it("should set value to mocked value when input is changed", () => {
        wrapper.find("input").simulate("change", e);
        expect(wrapper.find("input").prop("value")).toEqual('music');
        
    });

    it("should submit form", () => {
       expect(wrapper.find("form").props().onClick(e));
    });
});