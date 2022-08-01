import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthData, AuthOptions } from "./types";

const headers = {
  "Content-Type": "application/json",
};

const useAuthResponse = (options : AuthOptions) => {
  
  const navigate = useNavigate();
  
  const post = ({ email, password } : AuthData) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/${options.url}`,
        {
          email,
          password,
        },
        { headers }
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.accessToken);
          navigate('/');
        }
        return false;
      });
  };

  return post;
};

export default useAuthResponse;
