
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appReducer, contestGkReducer, formReducer, loaderReducer, popupReducer, timerReducer } from './reducers';

const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
    contestGk: contestGkReducer,
    loader: loaderReducer,
    popup: popupReducer,
    timer: timerReducer
  });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

