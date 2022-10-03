
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decreasecart, removeFromCart, clearCart, getTotals } from "../features/cartSlice";
import { useEffect } from "react";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreasecart(cartItem))
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleClearCart = (cartItem) => {
        dispatch(clearCart())
    }

    return ( 
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently empty</p>
                    <div className="start-shopping">
                        <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
                          <span>Start Shopping</span>  
                        </Link>
                    </div>    
                    </div>
            ) : (<div>
                <div className="titles">
                    <h3 className="product-title">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="Quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {cart.cartItems?.map(cartItem => (<div key = {cartItem.id} className="cart-item">
                        <div className="cart-product">
                            <img src={cartItem.img} alt={cartItem.name} />
                            <div>
                                <h3>{cartItem.name}</h3>
                                <p>{cartItem.info}</p>
                                <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                
                            </div>
                        </div>
                        <div className="cart-product-price">
                            ${cartItem.price}
                        </div>
                        <div className="cart-product-quantity">
                            <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                            <div className="count">
                                {cartItem.cartQuantity}
                            </div>
                            <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                        </div>
                        <div className="cart-product-total-price">
                            ${cartItem.price * cartItem.cartQuantity}
                        </div>
                    </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">${cart.cartTotalAmount}</span>

                        </div>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button>Checkout</button>
                        <div className="continue-shopping">
                        <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
                          <span>Start Shopping</span>  
                        </Link>
                    </div>   
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
 
export default Cart;