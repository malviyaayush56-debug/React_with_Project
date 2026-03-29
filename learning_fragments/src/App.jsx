import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import FoodItems from 'C:/Users/malvi/OneDrive/Desktop/React_Redux/learning_fragments/src/components/FoodItems';
import ErrorMessage from "C:/Users/malvi/OneDrive/Desktop/React_Redux/learning_fragments/src/components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Container from "C:/Users/malvi/OneDrive/Desktop/React_Redux/learning_fragments/src/components/Container";
import FoodInput from "C:/Users/malvi/OneDrive/Desktop/React_Redux/learning_fragments/src/components/FoodInput";
// import React from "react";
// import { useState } from "react";

function App() {
let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (  
   <>
   <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
</>
  );
}

export default App
