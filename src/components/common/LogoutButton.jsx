import { googleLogout } from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import { logout } from '../../features/auth/authSlice';

 const LogoutButton=()=>{

    const dispatch = useDispatch();

    const handleLogout=()=>{
        googleLogout();
        dispatch(logout())
    }
    return (

        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};
export default LogoutButton;