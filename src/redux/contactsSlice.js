// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';

import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from 'components/initialContacts';

const initialState = {
  list: initialContacts,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },

      prepare: ({ id, name, number }) => {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

export const ContactsReducers = contactSlice.reducer;

export const { addContact, deleteContact } = contactSlice.actions;
