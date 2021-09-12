import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import MealDisplay from './Components/MealDisplay';
import Button from './Components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mealData, setMealData] = useState([]);

  const GetMealData = (e) => {
    e.preventDefault();

    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => {
        setMealData(res.data.mealData);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="container">
      <div className="text-center pt-5">
        <h1> Feeling hungry? </h1>
        <h3>Get a random meal by clicking below</h3>
      </div>

      <div>
        <Button onClick={GetMealData} />
        <MealDisplay info={mealData} />

      </div>
    </div>
  );
}

export default App;
