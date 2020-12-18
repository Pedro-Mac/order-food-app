import axios from "axios";

export const getDishes = () =>
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/dishes`)
    .then((response) => response.data);
