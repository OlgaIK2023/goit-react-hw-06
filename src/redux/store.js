import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { contactlistReducer } from "./contactlistReducer";


const contactlistPeristConfig = {
    key: "contactlist",
    storage,
    whitelist: ["contacts"],
  };


export const store = configureStore({
  reducer: {
    contactList: persistReducer (contactlistPeristConfig, contactlistReducer),
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

});

export const persistor = persistStore(store);