import { GoogleLogin } from "@react-oauth/google"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginSuccess } from "../features/auth/authSlice";
const Login=()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (
        <div className="login-container">
            <h1>Login to MovieFlix</h1>
            <GoogleLogin
            onSuccess={(credentailResponse)=>{
                dispatch(loginSuccess(credentailResponse));
                navigate("/")
            }}
            onError={()=>{
                console.log("Login Failed");
            }}
            />
        </div>
    )
};

export default Login;