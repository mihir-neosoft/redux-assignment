import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { createStore } from "redux"
import { store } from './Components/store';
import reportWebVitals from './reportWebVitals';

// const initialState = { cart: [0,1] }
// function reducer(state = initialState, action) {
//   console.log(state);
//   switch (action.type) {
//     // case 'addtocart': return { cart: state.cart.push()}; //not a way to add element
//     // case 'addtocart': return {...state,cart: [...state.cart, action.payload]}; //can be used when we have multiple object.
//     case 'addtocart': return {cart: [...state.cart, action.payload]}; //if only cart is to be used.
//     default: return state;
//   }
// }

// initilize redux store.
// const store = createStore(reducer);

// to store value into cart.
// store.dispatch({ type: 'addtocart', payload: 1 });
// store.dispatch({ type: 'addtocart', payload: 2 });
// store.dispatch({ type: 'addtocart', payload: 3 });


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
