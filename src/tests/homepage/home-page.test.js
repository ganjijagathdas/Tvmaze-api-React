import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import HomePage from '../../components/homepage';
import showsMockData from '../Fixtures/shows-data-fixtures';
import axios from 'axios';
import ShowForm from '../../components/homepage/showForm';

jest.mock("axios");

configure({ adapter: new Adapter() });

axios.get.mockResolvedValue(showsMockData);

const showsdata = { data: showsMockData.shows };
axios.get.mockResolvedValue(showsdata);

describe('<HomePage/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });

    describe("after state updated", () => {
        beforeEach(() => {
            wrapper.setState({
                showsData: showsdata.data
            });
        });

        it("should set shows to be resolved data", () => {
            expect(wrapper.state("showsData")).toBe(showsdata.data);
        });

        it('should render ShowForm Component', () => {
            expect(wrapper.find(ShowForm).length).toBe(1);
        })
    })
})