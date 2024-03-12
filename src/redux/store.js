import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingsSlice';

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const setupStore = (
  preloadedState,
) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default setupStore;
