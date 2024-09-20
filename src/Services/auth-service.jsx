import axios from "axios";


export const loginHandler = async (number, password) => {
  try {
    const {
      data: { token },
      status,
    } = await axios.post("https://quizapp-backend-vlsg.onrender.com/api/auth/login", {
      number: number,
      password: password,
    });
    if (status === 200) {
      localStorage.setItem("token", token);
        return token;
    }
  } catch (err) {
    console.error(err);
  }
};