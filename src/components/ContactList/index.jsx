import { useDispatch, useSelector } from 'react-redux';
import { delUserAction } from '../../redux/user/userSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const listCont = useSelector(state => {
    return state.user.contacts;
  });
  // console.log('listCont', listCont);

  const filter = useSelector(state => {
    // console.log(state);
    return state.filter.filter;
  });

  const deleteCont = id => {
    dispatch(delUserAction(id));
  };

  return (
    <ul className="list-group">
      {listCont
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(elem => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={elem.id}
          >
            <label>
              {elem.name} - {elem.number}
            </label>

            <button
              className="btn btn-primary"
              type="button"
              onClick={() => deleteCont(elem.id)}
            >
              Del
            </button>
          </li>
        ))}
    </ul>
  );
};
