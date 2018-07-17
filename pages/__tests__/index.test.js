import React from 'react'
import {shallow, configure} from 'enzyme'
import Index from '../index'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Index Tests', () => {

    it('should be truthy', () => {
        expect(shallow(<Index />)).toBeTruthy();
    });
});