import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ShowForm from '../../components/homepage/showForm';
import showsMockData from '../fixtures/shows-data-fixtures';

configure({ adapter: new Adapter() });

describe('<ShowForm/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ShowForm />);
    });

    it("should set value to mocked value when input is changed", () => {
        wrapper = mount(<ShowForm />);
        wrapper.setState({
            showsData: showsMockData.show,
            inputValue: "music",
            isLoading: true
        });
        wrapper.update();

        expect(wrapper.state('showsData')).toBe(showsMockData.show);
        expect(wrapper.state("inputValue")).toBe("music");
    });
})