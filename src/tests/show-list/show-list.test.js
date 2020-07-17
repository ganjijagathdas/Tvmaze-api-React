import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ShowList from '../../components/show-list';

configure({ adapter: new Adapter() });

let wrapper;

const shows =
    [{
        id: 1,
        name: "Under the Dome",
        genres: ["Drama", "Science-Fiction", "Thriller"],
        schedule: { time: "22:00", days: ["Thursday"] },
        rating: { average: 6.5 },
        image: {
            "medium": 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
    }];

const data = {
    type : 'Drama'
}

describe('<ShowList />', () => {

    beforeEach(() => {
        wrapper = shallow(
            <ShowList shows={shows} type={data.type} />
        );
    });

    it('type should be equal to mock data', () => {
        expect(wrapper.find("h2").text()).toBe(data.type);
    });

    it('will render the List', () => {
        expect(wrapper.find('div.column_pic').length).toBe(1);
        expect(wrapper.find('Link').props().to.pathname).toBe('/show/1');
    });

    it('render <img> with image',() => {
        expect(wrapper.find("img").prop("src")).toEqual(shows[0].image.medium);
    });

    it('render <div> with text',() => {
        expect(wrapper.find('div.show_name').text()).toBe(shows[0].name);
    });
})