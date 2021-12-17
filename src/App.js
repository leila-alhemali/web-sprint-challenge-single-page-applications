import React, {useState, useEffect} from "react";
import {Route, Link, Switch, NavLink} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import * as yup from 'yup';
import axios from 'axios';


import Home from './components/Home';
import Pizza from './components/Pizza';
import PizzaForm from './components/PizzaForm';
import formSchema from './components/formSchema';


const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: ''
}



export default function App() {

  const [pizza, setPizza] = useState([])          
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
 


const postPizzaOrder = pizzaOrder => {


  axios.post('https://reqres.in/api/orders', pizzaOrder)
    .then(resp => {
      setPizza(resp.data)
      console.log(pizza)
    }).catch(err => console.error(err))
    .finally(() => setFormValues({initialFormValues}))
}

const validate = (name, value) => 
{  yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value
  })
}



const formSubmit = () => {
  const pizzaOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    topping1: formValues.topping1,
    topping2: formValues.topping2,
    topping3: formValues.topping3,
    topping4: formValues.topping4,
    // topping: ['topping1', 'topping2', 'topping3', 'topping4']
    //   .filter(toppings => !!formValues[toppings]),
    special: formValues.special.trim(),
  }
  postPizzaOrder(pizzaOrder)
}


  
  return (
    <>
      <h1>BloomTech Eats</h1>
      <p>Free pizza for hungry programmers</p>
    <Router>
    <Switch>
      <Route exact path='/'>
          <Home 

          />
      </Route>

      <Route exact path='/pizza'>
          <PizzaForm values={formValues}
                    change={inputChange}
                    submit={formSubmit}
                    errors={formErrors}
                    />
      </Route>
    </Switch>
    </Router>

    </>
  );
};

