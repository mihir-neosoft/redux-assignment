import { createStore } from "redux"

const initialState = { cart: [] }
function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    // case 'addtocart': return { cart: state.cart.push()}; //not a way to add element
    // case 'addtocart': return {...state,cart: [...state.cart, action.payload]}; //can be used when we have multiple object.
    case 'addtocart': return {cart: [...state.cart, action.payload]};  //if only cart is to be used.
    // clear cart clean from top nav bar.
    case 'clearcart': return {cart: []};
    default: return state;
  }
}

export const store = createStore(reducer);

// calling functions to store values.
store.dispatch({ type: 'addtocart', payload: JSON.parse(localStorage.getItem("cart")) });
// store.dispatch({ type: 'addtocart', payload: 2 });
