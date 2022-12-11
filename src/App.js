import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

function App() {
  return (
    <div className="App">
      <CitySearch/>
      <EventList
      />
       <NumberOfEvents />
    </div>
  );
}


// use CI=true npm test CI=true npm run build in terminal to test coverage******



export default App;
