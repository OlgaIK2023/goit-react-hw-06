import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactlistReducer } from "./contactlist/contactlistReducer";


const rootReducer = combineReducers(
    {
        contactList: contactlistReducer,
    }
);

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);