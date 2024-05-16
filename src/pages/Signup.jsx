import Template from "../Components/core/Auth/Template";
import signupImg from "../assets/old2.jpeg";

function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Your Health, Our Priority: Join Our Community Today"
      description1="Health is wealth."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
