
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appReducer, chatReducer, contestGkReducer, formReducer, loaderReducer, lobbyReducer, popupReducer, timerReducer } from './reducers';

const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
    contestGk: contestGkReducer,
    loader: loaderReducer,
    popup: popupReducer,
    timer: timerReducer,
    lobby: lobbyReducer,
    chat: chatReducer
  });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

