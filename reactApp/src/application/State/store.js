//store - is a redux object which helps us handle state changes
//reducer - is a function which works with switch case (for each action type) and updates the state
// for every change returns new state
//each component will have its respective reducer
//action - is the object a reducer accepts to create a new state
//action - object => action type (increment) ,payload (+5)
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import studentReducer from './Student/StudentReducer'
import userReducer from './User/UserReducer'

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // key to store in localStorage (or any storage)
  storage, // use localStorage by default
  whitelist: ['userReducer', 'studentReducer'], // optional: only persist specific reducers
  blacklist: [], // optional: prevent persisting specific reducers
}

//we can add multiple reducers and combine them togather to have one root reducer and add it to store
let rootReducer = combineReducers({
  userReducer, //userReducer : userReducer
  studentReducer,
})

// Persisted reducer that wraps the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

//create or configure and export the store from this code
export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'], // Ignore the persist/PERSIST action for serializability check
        },
      }),
  },
  {} //inital state if we want to set from store instead of reducer,
)

// Create persistor object
export const persistor = persistStore(store)