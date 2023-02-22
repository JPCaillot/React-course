import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // I could also set it to false and set true once the fetch begins if the fetching begins at a different event
  const [httpError, setHttpError] = useState(null); //or not passing any data at all, this is more explicit

  useEffect(() => {
    const fetchMeals  = async () => { //way to work around not being able to return promises in useEffect - running this function later inside the hook
      const response = await fetch('https://react-http-325a1-default-rtdb.firebaseio.com/meals.json');
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    }; 
    
    // PROMISE-ONLY WAY OF HANDLING ERRORS INSIDE OF A PROMISE:
    
    // try { // this could also be put in a separate function to avoid the promise effect of fecthMeals(), instead of the whole catch method
      fetchMeals().catch(error => { //then gets the result of a successful promise, catch handles errors coming up inside of the promise 
        setIsLoading(false);
        setHttpError(error.message); //the message can be better constructed, this is just a way to show how to throw errors
      }); 
    // } catch (error) {
    //   setIsLoading(false);
    //   setHttpError(error.message);
    // }
  }, []);

  if (isLoading) {
    return ( //this will be returned instead of the following return
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name} //I could also pass a prop "meal" with the whole object. MealItem should access it by props.meal.name for example
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
