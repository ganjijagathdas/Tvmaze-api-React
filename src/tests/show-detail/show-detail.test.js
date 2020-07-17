import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ShowDetail from '../../components/show-details';
import ShowCard from '../../components/show-card';
import showMockData from '../fixtures/show-fixtures';

configure({ adapter: new Adapter() });

const props = {
    match : {
        params : {
            id : 1
        }
    }
}

describe('<ShowDetails/>',() => {
    let wrapper;

    it("mount ShowDetail Component", () => {
        wrapper = mount(<ShowDetail {...props}/>);
        wrapper.setState({
            show : showMockData
        })
    })

    it('render <h3> text should be equal to mock data', () => {
        expect(wrapper.find('h3').text()).toBe(showMockData.name);
    })

    it('render <img> with imag',() => {
        expect(wrapper.find("img").prop("src")).toEqual(showMockData.image.medium);
    })

    it('render <h3> text should be equal to mock data', () => {
        expect(wrapper.find('p').text()).toBe(showMockData.summary);
    })

    it('render ShowCard length should one', () => {
        expect(wrapper.find(ShowCard).length).toBe(1);
    })
})