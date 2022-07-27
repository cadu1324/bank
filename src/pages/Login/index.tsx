import CardLogin from "../../components/CardLogin";
import LoginStyle from "./styles";

const Login = () => {
  document.title = "Login";
  return (
    <LoginStyle>
      <CardLogin />
    </LoginStyle>
  );
};

export default Login;
