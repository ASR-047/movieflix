import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";
// import LOGO from "../assets/MoveFlix-LOGO.png";
import "../styles/LoginStyle.css"
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="login-box">
        <h1 className="login-title">Login to MovieFlix</h1>
        <div className="logo-container">
          {/* <img src={LOGO} alt="MovieFlix Logo" className="logo-image" /> */}
        </div>
        <div className="google-login-button">
            <GoogleLogin
          onSuccess={(credentailResponse) => {
            dispatch(loginSuccess(credentailResponse));
            navigate("/");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        </div>
        
      </div>
    </div>
  );
};

export default Login;
