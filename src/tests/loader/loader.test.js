import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Loader from '../../components/loader';
import loaderSrc from '../.././assets/loader.gif';

configure({ adapter: new Adapter() });

describe("<Loder />", () => {
    it("renders an image", () => {
        const logo = shallow(<Loader />);

        expect(logo.find("img").prop("src")).toEqual(loaderSrc);

    });
});