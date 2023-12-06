import { deleteContact } from 'redux/contactsSlice';
import {
  ContactItem,
  ContactListStyled,
  ConstactItem,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.filter.filter);

  const filteredList = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListStyled>
      {filteredList.map(item => (
        <ContactItem key={item.id}>
          <ConstactItem>
            {item.name}: {item.number}
          </ConstactItem>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactListStyled>
  );

  // return (
  //   <ContactListStyled>
  //     {items.map(item => (
  //       <ContactItem key={item.id}>
  //         <ConstactItem>
  //           {item.name}: {item.number}
  //         </ConstactItem>
  //         <DeleteButton type="button" onClick={() => deleteContact(item.id)}>
  //           Delete
  //         </DeleteButton>
  //       </ContactItem>
  //     ))}
  //   </ContactListStyled>
  // );
};
