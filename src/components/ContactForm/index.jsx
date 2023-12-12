import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addUserAction } from '../../redux/user/userSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const listCont = useSelector(state => {
    return state.user.contacts;
  });

  const handleSubmit = e => {
    e.preventDefault();

    const newCont = {
      name: e.target.name.value,
      number: e.target.number.value,
    };

    if (newCont.name) {
      const contObj = { id: nanoid(), ...newCont };
      // Массив имен из объекта
      const arrName = [];
      for (const contact of listCont) {
        arrName.push(contact.name);
      }
      //Проверка на наличие уже такого имени
      const arrNameLowerCase = arrName.map(elem => elem.toLowerCase());
      if (arrNameLowerCase.includes(newCont.name.toLowerCase())) {
        alert(`${newCont.name} is already in contacts`);
        return;
      }
      dispatch(addUserAction(contObj));
    }

    e.target.name.value = '';
    e.target.number.value = '';
  };

  const handleChange = ({ target: { name, value } }) => {
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;
    //   default:
    //     return;
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="form-control"
          id="exampleFormControlInput1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Telephone
        </label>
        <input
          type="tel"
          name="number"
          required
          className="form-control"
          id="exampleFormControlInput2"
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Add contact
      </button>
    </form>
  );
};
