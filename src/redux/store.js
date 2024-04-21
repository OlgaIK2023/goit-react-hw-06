import { configureStore } from "@reduxjs/toolkit";

import { contactlistReducer } from "./contactlistReducer";

export const store = configureStore({
  reducer: {
    contactList: contactlistReducer,
  },
});
