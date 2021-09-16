import React from 'react';

const MealsInfo = ({ info }) => {
  
  return (
    <>
      {info.map((info) => (
        <div>
          <div className="row">
            <div className="col-5">
              <img src={info.strMealThumb} alt="Meal" style={{width: '100%'}}/>
              {info.strCategory ? 
                (<p><strong>Category:</strong> {info.strCategory}</p>) 
                : ('')}
              {info.strArea ? 
                (<p><strong>Area:</strong> {info.strArea}</p>) 
                : ('')}
              {info.strTags ? 
                (<p><strong>Tags:</strong> {info.strTags.split(',').join(', ')}</p>) 
                : ('')}
              
              <h5>Ingredients:</h5>
                <ul>
                  <li>{info.strIngredient1} - {info.strMeasure1}</li>
                  <li>{info.strIngredient2} - {info.strMeasure2}</li>
                  <li>{info.strIngredient3} - {info.strMeasure3}</li>
                  <li>{info.strIngredient4} - {info.strMeasure4}</li>
                  <li>{info.strIngredient5} - {info.strMeasure5}</li>
                  <li>{info.strIngredient6} - {info.strMeasure6}</li>
                  <li>{info.strIngredient7} - {info.strMeasure7}</li>
                  <li>{info.strIngredient8} - {info.strMeasure8}</li>
                  <li>{info.strIngredient9} - {info.strMeasure9}</li>
                  <li>{info.strIngredient10} - {info.strMeasure10}</li>
                  <li>{info.strIngredient11} - {info.strMeasure11}</li>
                  <li>{info.strIngredient12} - {info.strMeasure12}</li>
                </ul>
            </div>
            <div className="col-7">
              <h4>{info.strMeal}</h4>
              <p>{info.strInstructions}</p>
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
}

export default MealsInfo;
