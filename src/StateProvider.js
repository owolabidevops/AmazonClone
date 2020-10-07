//setup data layer
// tracking the record of the basket
//keeping track of the user info

import React, { createContext, useContext, useReducer } from "react";
//this is the data layer
export const StateContext = createContext();

//Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we usev it inside d component
export const useStateValue = () => useContext(StateContext);
