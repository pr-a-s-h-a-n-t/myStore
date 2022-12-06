
import './App.css';
import React,{ useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'



function App() {
  // https://fakestoreapi.com/products
 
  const[store, setStore] = useState([]);
  useEffect(() =>{
    mystore();
  },[])


  const  mystore = async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const jsondata = await res.json();
    // console.log(jsondata)
    setStore(jsondata);
    // console.log(store)

  }
  const[like, setLike] = useState( false);

  function likeme(){

     
    setLike(true);
  }
  console.log(like);



  return (
    <div  >
      <h2>MYSTORE</h2>
      <div className='container'>
        {store.map((values) => {
          
            return(
              <>
                <div className='box'>
                  <div className='img-container'>
                    <span style={{like }=== true ? {backgroundcolor: "red"} : {color: ""}}  onClick={likeme} > <FontAwesomeIcon id='heart'   icon={faHeart} /> </span>
                     <img src={values.image} alt="product_image" />

                  </div>
                  <div className='content'>
                    <h5>{values.title}</h5>
                    <p>{values.description}</p>
                  </div>
                </div>

             
              </>
            )
        })}
      </div>
    </div>
  );
}

export default App;
