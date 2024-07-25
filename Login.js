import {useRef,useState,useEffect} from 'react';
function Login(){
    useEffect(()=>{
        firstRef.current.focus();
    })
    const firstRef=useRef(null); 
    const SecondRef=useRef(null); 
    const [loginMessage,setMessage] =useState('');
    const loginSuccess=(event)=>{
        event.preventDefault();
        console.log("Login Success");
         console.log(firstRef.current.value);      
         console.log(SecondRef.current.value);         
        if(firstRef.current.value==SecondRef.current.value){
                console.log("Correct");
                setMessage("Login Success");
        }
        else{
            console.log("Incorrect");
            setMessage("Login failed");
        }
        firstRef.current.value='';
        SecondRef.current.value='';
    }

    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <div className="card" style={{width:"30rem",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h1 style={{margin:'20px'}}>Login</h1>
            <p style={{margin:'20px'}}>Provide your details to login</p>
        <form onSubmit={loginSuccess} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        
            <h5 style={{margin:'20px'}}>College Id</h5>
            <input type="text" placeholder="College Id" style={{width:"300px",marginLeft:"20px"}}ref={firstRef}/>
            <h5 style={{margin:'20px'}}>Password</h5>
            <input type="password" placeholder="Password" style={{marginLeft:"20px",marginTop:"5px",width:"300px"}}ref={SecondRef}/>
            <button type = "submit"className="btn btn-dark"style={{margin:"30px"}}>Login</button>
            <p>{loginMessage}</p>
        </form>
        </div>
        </div>
    
    );
}
export default Login;