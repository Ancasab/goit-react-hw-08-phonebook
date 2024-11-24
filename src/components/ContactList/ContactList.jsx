import { useSelector } from 'react-redux';
import {
  selectContactsFilter,
  selectContactsList,
} from '../../redux/constacts/selectors';
import { ContactsListItem } from '../ContactListItem/ContactListItem';
import { ListContact } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {visibleContacts.length > 0 && (
        <ListContact>
          {visibleContacts.map(({ name, number, id }) => (
            <ContactsListItem key={id} id={id} name={name} number={number} />
          ))}
        </ListContact>
      )}
    </>
  );
};