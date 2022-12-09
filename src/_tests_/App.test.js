// src/__tests__/App.test.js

import React from 'react';
//renders your react components for testing, renders them without a DOM and w/out any children
import { shallow } from 'enzyme';
//you cannot test a component without importing it
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

describe('<App /> component', () => {

    let AppWrapper;
    beforeAll(()=>{
        AppWrapper=shallow(<App/>)
    })

    test('render list of events',()=>{
    expect(AppWrapper.find(EventList)).toHaveLength(1);
    })

    test('render CitySearch',()=>{
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    })


});                      