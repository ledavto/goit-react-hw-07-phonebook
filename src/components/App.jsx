import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useSelector } from 'react-redux';

//rafce

export const App = () => {
  const listCont = useSelector(state => {
    // console.log(state.user.contacts);
    return state.user.contacts;
  });

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {listCont.length > 0 && <ContactList />}
    </div>
  );
};
