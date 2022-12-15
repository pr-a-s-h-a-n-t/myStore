
import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Cart from './components/Cart';
import {  Routes, Route } from "react-router-dom";



function App() {

  const [store, setStore] = useState([]);
  useEffect(() => {
    mystore();
  }, [])


  const mystore = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const jsondata = await res.json();
    jsondata.forEach(object => {
      object.amount = 1;
    });
    setStore(jsondata);


  }


  console.log(store)


  // below caode is for add to Cart feature!
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);


  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      alert("Item is already added to your cart")
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }






  return (
    <div  >
      <Navigation size={cart.length} setShow={setShow} />
      {/* {
        warning && <div className='warning'>Item is already added to your cart</div>
      } */}
      <Routes> 

      {/* <Route path={"/"} element={<Navigation size={cart.length} setShow={setShow} />} />   */}
        {/* show ?  <Route index element={ <Home handleClick={handleClick} store={store} setStore={setStore} />}> </Route> : 
        
        <Route path={"cart"} element={ <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}> </Route> */}
       
      <Route  path={"/"} element={ <Home handleClick={handleClick} store={store} setStore={setStore} />} />  
      <Route path={"cart"} element={ <Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />  
      </Routes>
    </div>
  );
}

export default App;
