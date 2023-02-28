import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      //separate function because it will use fetch API and try/catch
      const response = await fetch(
        'https://react-http-325a1-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
        const cartData = await fetchData(); //as the sending method is PUT, we get data exactly as we sent it, instead of a list with POST for example, so no formatting will be required
        dispatch(cartActions.replaceCart({
            items: cartData.items || [], //SUPER IMPORTANT to put a dummy in case it's empty, and therefore, NOT in firebase
            totalQuantity: cartData.totalQuantity,
          }));
    } catch(error) {
        dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Fetching cart data failed!",
            })
          );
    }
  };
};

//ACTION CREATOR OPTION - sending cart data to firebase
//custom actions must be written after the standard reducer
// export const sendCartData = (cart) => {
//   return async (dispatch) => { // in normal redux, this would be an object with type and payload
//     dispatch( //as a separate JS function, it admits async code
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data!",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://react-http-325a1-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT", // differs from POST cause it wil always overwrite the content in the location
//           body: JSON.stringify(cart),
//         }
//       ); //could use .then()

//       if (!response.ok) {
//         throw new Error("Sending cart data failed.");
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Sent cart data successfully!",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sending cart data failed!",
//         })
//       );
//     }
//   };
// };
