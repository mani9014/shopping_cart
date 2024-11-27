import './App.css';
import React,{useEffect,useReducer} from 'react';
import {cartReducer} from '../src/Reducer/cartReducer';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

const App = () => {

  const [state,dispatch] = useReducer(cartReducer,{
    products : [],
    cart :[]
  });

  console.log(state)

  const fetchProducts = async() => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    //console.log(data.products)
    dispatch({
      type:'ADD_PRODUCTS',
      payload : data.products
    })
  }

  useEffect(()=> {
    fetchProducts();
  },[]);

  return(
    <div className='app-container'>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App;
