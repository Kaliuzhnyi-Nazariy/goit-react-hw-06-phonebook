
import { ContactList } from './ContactList/ContactList';

import { ContactForm } from './ContactForm/ContactForm.js';
import { ContactFilter } from './Filter/Filter';

export const App = () => {

  return (
      <div style={{margin: '24px'}}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
      <ContactFilter />
      <ContactList/>
      </div>
    );
  }
