import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ShowCard from '../../components/show-card';
import showMockData from '../fixtures/show-fixtures';

configure({ adapter: new Adapter() });

describe('<ShowCard/>',() => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ShowCard show={showMockData} />
        );
    });

    it('should render rating',() => {
        expect(wrapper.find('div.showcard_details').length).toBe(1);
    })

    it('rating should match with mockdata', () => {
        expect(wrapper.find("span").first().text()).toBe(showMockData.rating.average.toString());
    })

    it('country name should match with mockdata', () => {
        expect(wrapper.find("span").get(1).props.children).toBe(showMockData.network.country.name);
    })

    it('type should match with mock data', () => {
        expect(wrapper.find("span").get(2).props.children).toBe(showMockData.type)
    })

    it('genres should match with mock data', () => {
        expect(wrapper.find("span").last().text()).toBe(showMockData.genres);
    })
})
