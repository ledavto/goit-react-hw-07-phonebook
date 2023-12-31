import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';

//rafce

export const App = () => {
  const dispatch = useDispatch();
  const listCont = useSelector(state => state.user.contacts.items);
  const isLoading = useSelector(state => state.user.contacts.isLoading);
  const error = useSelector(state => state.user.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Please wait...</b>}
      {listCont.length > 0 && <ContactList />}
    </div>
  );
};
