import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from '../../redux/constacts/selectors';
import { addContact } from '../../redux/constacts/operations';
import { Form, Input, Label, Button, Icon } from './ContactForm.styled';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export const ContactForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;
    
    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in your contacts.`);
    }

    if (contacts.some(({ number }) => number === formNumber)) {
      return alert(`${formNumber} is already in your contacts.`);
    }

    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name}  has been successfully added`
        );
      })
      .catch(() => {
        Notify.failure("Oops something's wrong");
      });

    onCloseModal();
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={contacts.name}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter number"
          value={contacts.number}
        />
      </Label>
      <Button type="submit">
        <Icon />
        New contact
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};




