import React from 'react'

function Card({ item, i, handleClick }) {
    return (

        <div
            key={i}
            className='box'>
            <div className='img-container'>

                <img src={item.image} alt="product_image" />

            </div>
            <div className='content'>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <button onClick={() => handleClick(item)} >Add to Cart</button>

            </div>
        </div>

    )
}

export default Card
