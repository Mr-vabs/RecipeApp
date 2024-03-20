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
          <div className="flex flex-wrap card card-res border-info my-2">
            <h1 className="card-header">{data.strMeal}</h1>
            <div className="row">
              <div className="col-lg-auto">
                <img
                  className="img-fluid rounded card-img-top p-1"
                  src={data.strMealThumb}
                  alt={data.strMeal}
                  style={{ maxWidth: "480px" }} // Limit image width
                />
              </div>
              <div className="col-lg">
                <div className="card-body">
                  <p className="lead">{data.strInstructions}</p>
                  <ul class="list-inline">
                    <li class="list-inline-item"><strong>Category</strong> {data.strCategory}</li>
                    <li class="list-inline-item"><strong>Area</strong> {data.strArea}</li>
                    <li class="list-inline-item"><strong>Tags</strong> {data.strTags}</li>
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
              </div>
            </div>
          </div>
        </div>
      )}
      <button className="btn btn-primary position-absolute position-fixed bottom-0 end-0 rounded-pill" onClick={getMeals}>
        Get Random Recipe
      </button>
    </div>
  );
}
