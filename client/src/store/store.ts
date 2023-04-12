import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import blogReducer from "../features/blogs/blogSlice";
import accountReducer from "../features/account/accountSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    account: accountReducer,
  },
});

//  RootState type is used to represent the entire state of the application, which is the combined state of all the reducers in the Redux store.
// store.getState() function is a function provided by the Redux store to retrieve the current state of the store.
// RootState type is the type of the state returned by the store.getState() function, which is the combined state of all the reducers in the store.
export type RootState = ReturnType<typeof store.getState>;

// In order to make changes to the state, an action needs to be dispatched to the Redux store using the dispatch function.
// The typeof store.dispatch expression returns the type of the dispatch function, which is a function that is used to dispatch actions to the Redux store.
// Overall, the AddDispatch type is a type alias for the type of the dispatch function in the Redux store
export type AddDispatch = typeof store.dispatch;

////* custom hooks 2 */////

/* 
  Overall - returns the dispatch function from the store

  the useDispatch hook is used to get a reference to the dispatch function from the Redux store
  useAppDispatch function is a custom hook that wraps the useDispatch hook and returns a typed version of the dispatch function 
  that is specific to the Redux store in your application.

  it's a function that returns the useDispatch hook, but with the AddDispatch type provided as a generic argument. 
  This ensures that the returned dispatch function has the correct type, which is the same type as the store.dispatch

  This is to ensure that the dispatched actions have the correct type (TYPE SAFETY)
*/
export const useAppDispatch = () => useDispatch<AddDispatch>();

/*
  Overall - a typed selector hook that provides access to the store's state.

  useSelector hook is used to extract data from the Redux store state
  
  To avoid repeating the type of the Redux store state throughout your application, you can define a custom hook like useAppSelector. 

*/
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
