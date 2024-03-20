import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getMeals();
  }, []);

  useEffect(() => {
    // console.log(data);
  }, [data]);

  const getMeals = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const meals = await response.json();
    setData(meals.meals[0]);
  };

  return (
    <div className="container-fluid">
      {data && (
        <div>
          <h1 className="display-1">{data.strMeal}</h1>
          <div className="flex flex-wrap card card-res">
            <img
              className="img-fluid rounded card-img-top"
              src={data.strMealThumb}
              alt={data.strMeal}
              style={{ width: '250px', height: 'auto' }}
            />
            <div className="card-body">
              <p className="lead">{data.strInstructions}</p>
            </div>
          </div>

          <ul class="list-inline">
            <li class="list-inline-item">{data.strCategory}</li>
            <li class="list-inline-item">{data.strArea}</li>
            <li class="list-inline-item">{data.strTags}</li>
          </ul>
          <p className="blockquote-footer">
            <a href={data.strYoutube}>
              <cite title="Source Title">Youtube Link</cite>
            </a>
          </p>
          <p className="blockquote-footer">
            <a href={data.strSource}>
              <cite title="Source Title">Source Link</cite>
            </a>
          </p>
        </div>
      )}
      <button className="btn btn-primary" onClick={getMeals}>
        Get Random Recipe
      </button>
    </div>
  );
}
