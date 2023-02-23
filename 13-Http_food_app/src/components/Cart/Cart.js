import { useContext, useState, Fragment } from "react"
import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://react-http-325a1-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items
        }) 
      });

      if (!response.ok) {
        throw new Error('The order could not be sent. Please try again!');
      }
      setDidSubmit(true);
      cartCtx.clearCart();
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }
    setIsSubmitting(false);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
      {!isCheckout && modalActions}
    </Fragment>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>        
      </div>
    </Fragment>
  );

  const orderError = (
    <Fragment>
      <p>{errorMessage}</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>        
      </div>
    </Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && !isError && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent} {/*redundant but safer*/}
      {!isSubmitting && !didSubmit && isError && orderError}
    </Modal>
  );
};

export default Cart;
