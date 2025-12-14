import { googleLogout } from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import { logout } from '../../features/auth/authSlice';

export const LogoutButton=()=>{

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
}