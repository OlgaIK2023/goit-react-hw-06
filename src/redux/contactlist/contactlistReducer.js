const INITIAL_STATE = {
  contacts: [],
  filter: "",
};

export const contactListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contactlist/addContact": {
        return {
            ...state,
            contacts: [...state.contacts, action.payload],
        }
    }
    case "contactlist/deleteContact": {
        return {
            ...state,
            contacts: state.contacts.filter ((contact ) => contact.id !== action.payload)
        }
    }
    case "contactlist/setFilter": {
        return {
            ...state,
            filter: action.payload
        }
    }
    default:
      return state;
  }
};
