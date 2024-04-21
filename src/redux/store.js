import { configureStore } from "@reduxjs/toolkit";

import { contactlistReducer } from "./contactlist/contactlistReducer";

export const store = configureStore({
  reducer: {
    contactList: contactlistReducer,
  },
});
