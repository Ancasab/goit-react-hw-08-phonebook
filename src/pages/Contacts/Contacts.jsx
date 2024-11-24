import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/constacts/operations';
import { selectError, selectIsLoading } from '../../redux/constacts/selectors';
import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import {
  AddUserIcon,
  Button,
  Wrapper,
  PageContainer,
  FilterWrapper,
  Title,
} from './Contacts.styled';
import { Modal } from 'components/Modal/Modal';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsShowModalAddUser(prev => !prev);
  };

  return (
    <PageContainer>
      <Section>
        <Wrapper>
          <Title>Your contacts:</Title>
          <FilterWrapper>
            <Filter />
            <Button type="button" onClick={handleOpenModal}>
              <AddUserIcon />
               Add New Contact
            </Button>
          </FilterWrapper>
        </Wrapper>
        {isLoading && !error && <b>Request in progress</b>}
        <ContactList />
      </Section>
      {isShowModalAddUser && (
        <Modal
          children={
            <Section title="Add New Contact">
              <ContactForm onCloseModal={handleOpenModal} />
            </Section>
          }
          onCloseModal={handleOpenModal}
        ></Modal>
      )}
    </PageContainer>
  );
};

export default Contacts;

