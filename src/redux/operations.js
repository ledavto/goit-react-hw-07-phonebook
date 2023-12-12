import axios from "axios";

axios.defaults.baseURL = "https://657855f2f08799dc8044f5c2.mockapi.io";

const fetchTasks = () => async dispatch => {
 try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get("/contacts");
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};