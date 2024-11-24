import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/constacts/operations';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
  UserIcon,
  UserDeletedIcon,
  PhoneIcon,
} from './ContactListItem.styled';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} has been deleted successfully`
        );
      })
      .catch(() => {
        Notify.failure("Oops something's wrong");
      });
  };

  return (
    <ContactItem key={id}>
      <ContactName>
        <UserIcon />
        {name}
      </ContactName>
      <ContactNumber>
        <PhoneIcon />
        {number}
      </ContactNumber>
      <Button onClick={() => handleDeleteContact(id)}>
        <UserDeletedIcon />
        Delete
      </Button>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};