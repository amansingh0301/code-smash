
import { ThunkDispatch, combineReducers, configureStore } from '@reduxjs/toolkit'
import { appReducer, contestReducer, formReducer } from './reducers';

const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
    contest: contestReducer,
  });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

