import Template from "../Components/Template";
import loginImg from "../assets/old1.jpeg";

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      description1="Health is wealth"
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
