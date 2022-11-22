
import './App.css';
import React,{ useState, useEffect } from 'react';

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


  return (
    <div  >
      <h2>MYSTORE</h2>
      <div className='container'>
        {store.map((values) => {
          
            return(
              <>
                <div className='box'>
                  <div className='img-container'>
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
