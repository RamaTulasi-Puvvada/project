import { useState } from "react";
import Login from './Login';
import Register from './Register'

function Tab(){
    const [isLogin,setIsLogin] = useState(true);
    const showLogin=()=>{setIsLogin(true)}
    const showRegister=()=>{setIsLogin(false)}
    return(
    <div>
            <button type="submit" className="btn btn-outline-dark" onClick={showLogin}>Login</button>    
            <button type="submit" className="btn btn-outline-dark" onClick={showRegister}>Register</button>
            {isLogin?
            <div><Login/></div>
            :
            <div><Register /></div>
        }

    </div>
    );
}
export default Tab;