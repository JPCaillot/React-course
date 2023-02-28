import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import { fetchCartData } from "./store/cart-actions";
//import { sendCartData } from "./store/cart-actions";

let isInitial = true; //doesn't change/reinitialize when the component renders again(!!!!)

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart); // extracting cart state after redux works
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => { //could also be along with the other useEffect, but it's cleaner to deal with different dependencies in this case
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (cart.changed) {
      const sendCartData = async () => {
        //it can only be async if in a function INSIDE useEffect
        dispatch(
          uiActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!",
          })
        );
  
        const response = await fetch(
          "https://react-http-325a1-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT", // differs from POST cause it wil always overwrite the content in the location
            body: JSON.stringify({
              items: cart.items,
              totalQuantity: cart.totalQuantity,
            }),
          }
        ); //could use .then()
  
        if (!response.ok) {
          throw new Error("Sending cart data failed.");
        }
  
        const responseData = await response.json();
  
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      };
  
      if (isInitial) {
        isInitial = false;
        return; //won't call sendCartData with the fetch 
      }
  
      sendCartData().catch((error) => {
        //returns a promise, so .catch can be applied
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      });
    }
  }, [cart, dispatch]); // whenever cart changes, this is done, which is very convenient
  // this could be done in any component, but here it makes more sense
  //redux ensures dispatch will never change, but we should add it to dependencies anyway


  //OPTION USING AN ACTION CREATOR INSIDE THE SLICE
  // useEffect(() => {    
  //   if (isInitial) {
  //     isInitial = false;
  //     return; //won't call sendCartData with the fetch 
  //   }

  //   dispatch(sendCartData(cart));
  // }, [cart, dispatch]); 
  
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
