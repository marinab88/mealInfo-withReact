import React from 'react';

const MealDisplay = ({ info }) => {
  
  return (
    <div className="row">
      <div className="col-5">
        { info.map((meal) => (
          <>
            <div>
              <img src={meal.strMealThumb} alt="Meal Image" />
              {meal.strCategory ? (<p><strong>Category:</strong> {meal.strCategory}</p>) : ('')}
              {meal.strArea ? (<p><strong>Area:</strong> {meal.strArea}</p>) : ('')}
              {meal.strTags ? (<p><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p>) : ('')}
              <h5>Ingredients:</h5>
                <ul>
                  <li>
                    {meal.strIngredient1} - {meal.strMeasure1}
                  </li>
                  <li>
                    {meal.strIngredient2} - {meal.strMeasure2}
                  </li>
                  <li>
                    {meal.strIngredient3} - {meal.strMeasure3}
                  </li>
                  <li>
                    {meal.strIngredient4} - {meal.strMeasure4}
                  </li>
                  <li>
                    {meal.strIngredient5} - {meal.strMeasure5}
                  </li>
                </ul>
            </div>
            <div className="col-7">
              <h4>{meal.strMeal}</h4>
              <p>{meal.strInstructions}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MealDisplay;
