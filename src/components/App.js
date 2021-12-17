import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import Pizza from './Pizza';
import PizzaForm from './PizzaForm';
import schema from './formSchema';


export default function App() {

  const [pizza, setPizza] = useState([])          
  const [formValues, setFormValues] = useState({}) 
  const [formErrors, setFormErrors] = useState({}) 


const postPizzaOrder = pizzaOrder => {

  axios.post('https://reqres.in/api/orders', pizzaOrder)
    .then(resp => {
      console.log(resp.data)
    }).catch(err => console.error(err))
    .finally(() => setFormValues({}))
}


  
  return (
    <>
      <h1>BloomTech Eats</h1>
      <p>Free pizza for hungry programmers</p>
    </>
  );
};

