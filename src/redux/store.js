import { combineReducers, createStore } from "redux";
import { contactListReducer } from "./contactlist/contactListReducer.js";

const rootReducer = combineReducers(
    {
        contactList: contactListReducer,
    }
);

export const store = createStore(rootReducer)