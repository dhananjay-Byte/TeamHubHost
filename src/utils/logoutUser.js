import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL_BASE
export const logout = () => {

    localStorage.removeItem("id")
    localStorage.removeItem("name")
    localStorage.removeItem("email")

  axios.post(`${apiURL}/v1/api/auth/logout`, {}, { withCredentials: true })
    .then((response) => {
      console.log("Logged out successfully", response.data);

      window.location.href = "/login"; 
    })
    .catch((err) => {
      console.error("Logout error:", err);
    });
};
