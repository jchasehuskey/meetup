// src/__tests__/App.test.js

import React from 'react';
//renders your react components for testing, renders them without a DOM and w/out any children
import { shallow, mount } from 'enzyme';
//you cannot test a component without importing it
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

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


    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
      });


});   

describe('<App /> integration', () => {
    test('App passes "events" state as a prop to EventList', () => {
      const AppWrapper = mount(<App />);
      const AppEventsState = AppWrapper.state('events');
      expect(AppEventsState).not.toEqual(undefined);
      expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
      AppWrapper.unmount();
    });


    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
      });





  });
