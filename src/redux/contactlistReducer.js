import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: [],
  filter: "",
};

// export const contactlistReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "contactlist/addContact": {
//         return {
//             ...state,
//             contacts: [...state.contacts, action.payload],
//         }
//     }
//     case "contactlist/deleteContact": {
//         return {
//             ...state,
//             contacts: state.contacts.filter ((contact ) => contact.id !== action.payload)
//         }
//     }
//     case "contactlist/setFilter": {
//         return {
//             ...state,
//             filter: action.payload
//         }
//     }
//     default:
//       return state;
//   }
// };



const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
        state.users.push(action.payload);
    },
    deleteContact(state, action) {
        state.users = state.users.filter ((user) => user.id !== action.payload);
    },
    setFilter(state, action) {
        state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const {addContact, deleteContact, setFilter } = contactsSlice.actions;

// Редюсер слайсу
export const contactlistReducer = contactsSlice.reducer;

