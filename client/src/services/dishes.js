import axios from "axios";

export const getDishes = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/dishes`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
