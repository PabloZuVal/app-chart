import logo from './logo.svg';
import React  from 'react';
import Chart from 'react-google-charts';
import './App.css';

const data = [
  ['Year','Sales','Expenses','Profit'],
  ['2016',1000,200,200],
  ['2017',1100,400,500],
  ['2018',900,300,200],
  ['2019',1500,500,500],
  ['2020',1000,400,600],
]

const opt = {
  chart:{
    title: "Company performance",
    subtitle:"Example subtitle "

  }
}

const  App = () => {
  return (
    <div className="App">
      Google Charts
      <Chart chartType='Bar' data={data} options={opt}/>
    </div>
  );
}

export default App;
