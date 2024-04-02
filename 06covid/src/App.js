import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'
import Pokemon from './Pokemon';

function App() {
  
 

  // const getCovidData = async () => {
  //   try {
  //     const response = await fetch('./data.json'); // Assuming data.json is your JSON file
  //     const data = await response.json();
  //     console.log(data); // Check if data is fetched correctly
  //     setCovidData(data); // Set fetched data to state
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   getCovidData();
  // }, []);

    return (
    <>
      <h1>Covid 19 CASE details</h1>
      {data.statewise && (
        <table className='table table-responsive' >
          <thead>
            <tr >
              <th>state</th>
              <th>active</th>
              <th>confirmed</th>
              <th>deaths</th>
              <th>recovered</th>
            </tr>
          </thead>
          <tbody>
            {data.statewise.map((item, index) => (
              <tr key={index}>
                <td>{item.state}</td>
                <td>{item.active}</td>
                <td>{item.confirmed}</td>
                <td>{item.deaths}</td>
                <td>{item.recovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Pokemon />
    </>
  );
}

export default App;
