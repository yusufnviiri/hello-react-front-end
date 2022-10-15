import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { greetingsReducer } from '../components/greetingSlice';

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
