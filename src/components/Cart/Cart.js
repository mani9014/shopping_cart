import React,{useState,useEffect} from 'react';
import './Cart.css';

const Cart = ({state,dispatch}) => {
    
    const {cart} = state;
    const [total,setTotal] = useState();

    useEffect(() => {
        setTotal(
          cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);
    
      const changeQty = (id,qty) => dispatch({
          type: "CHANGE_CART_QTY",
          payload: {
          id: id,
          qty: qty,
          },
      })

    return(
        <div className='cart-container'>
            <b className='cart-total'>Cart</b>
            <b className='cart-total'>Subtotal : $ {total}</b>

            {cart.length > 0 ?
             cart.map((prod) => (
                <div key={prod.title} style={{display:'flex', padding:10, border:"1px solid grey", margin:5, justifyContent:'space-between'}}>
                     <div style={{display:'flex',gap:10}}>
                      <img src={prod.thumbnail} alt={prod.title} style={{width:70, objectFit:'cover'}}/>
                      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                          <span>{prod.title}</span>
                          <b>$ {prod.price}</b>
                      </div>
                     </div>
                     <div style={{display:'flex', alignItems:'center', gap:10}}>
                         <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
                         <span>{prod.qty}</span>
                         <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
                     </div>
                 </div>
                 ))
             : (<span className='cart-total'>Cart is Empty</span>)
            }
        </div>
    )
}
export default Cart;