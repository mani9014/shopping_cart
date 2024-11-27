import React from 'react';
import './Products.css'

const Products = ({state,dispatch}) => {

    const {products,cart} = state;

    return(
        <div className='products-container'>
            {products.map((prod) => (
                <div className='product-container' key={prod.id}>
                    <img src={prod.thumbnail} alt={prod.title} className='image'/>
                    <div className='title-price'>
                        <span>{prod.title}</span>
                        <b>$ {prod.price}</b>
                    </div>
                    {
                        cart.some(p => p.id ===prod.id) ?
                        <button className='remove-button' onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:prod})}>Remove From Cart</button> :
                        <button className='add-button' onClick={() => dispatch({
                            type:"ADD_TO_CART",payload:{
                                id:prod.id,
                                title : prod.title,
                                thumbnail : prod.thumbnail,
                                qty : 1,
                                price : prod.price
                            }
                        })}>Add To Cart</button>
                    }
                    
                    
                    
                </div>
            ))}

        </div>
    )
}
export default Products;