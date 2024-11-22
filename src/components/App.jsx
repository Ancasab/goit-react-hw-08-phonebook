import {ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {Container, Title, Heading2 } from './App.styled';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook &#9743; </Title>
      <ContactForm/>
      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" />
    </Container>
  );
}


