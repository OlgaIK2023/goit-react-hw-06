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
    default:
      return state;
  }
};
