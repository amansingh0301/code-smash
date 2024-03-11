
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { contestReducer, formReducer } from './reducers';

const rootReducer = combineReducers({
    form: formReducer,
    contest: contestReducer,
  });

export const store = configureStore({
  reducer: rootReducer
});


