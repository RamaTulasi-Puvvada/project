import { useState } from "react";

function Register(){
    const [collegeIdValue,setCollegeId]=useState('');
    const [Password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [branch,setBranch]=useState('');
    const [year,setYear]=useState('');
    const [gender,setGender]=useState('');

    // const getCollegeId=(event)=>{
    //     event.preventDefault();
    //     setCollegeId(event.target.value)
    //     console.log(collegeIdValue);

    // }
    const formSubmitted=(event)=>{
        event.preventDefault();
        console.log("Form submitted");
        const formdata ={collegeIdValue,Password,email,branch,year,gender};
        console.log(formdata);

    }
    return (
        <div className="card">
        <div className="container" style={{width:'300px',padding:'20px'}}>
            <h1 style={{margin:'20px'}}>Register</h1>
            <p style={{margin:'20px'}}>Privide your details to register</p>
            <form onSubmit={formSubmitted}>
                <h5 style={{ margin: '20px' }}>College Id</h5>
                <input type="text" placeholder="College Id" style={{ width: "400px", marginLeft: "20px" }} onChange={(e)=>setCollegeId(e.target.value)}/>
                <h5 style={{ margin: "20px",marginBottom:"10px" }}>Password</h5>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
                style={{ marginTop: "5px" ,width:"400px",marginLeft:'20px'}}/>
                <h5 style={{ margin: '20px' }}>Email Address</h5>
                <input type="email" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}
                style={{ width: "400px", marginLeft: "20px" }}/>
                <h5 style={{ margin: '20px' }}>Branch</h5>
                <select name="Branch" style={{ width: "400px", marginLeft: "20px" }} onChange={(e)=>setBranch(e.target.value)}>
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="MECH">MECH</option>
                </select>
                <h5 style={{ margin: '20px' }}>Year</h5>
                <select name="Year" onChange={(e)=>setYear(e.target.value)}
                     style={{ width: "400px", marginLeft: "20px" }}>
                    <option value="">Select Year</option>
                    <option value="1st year">1st year</option>
                    <option value="2nd year">2nd year</option>
                    <option value="3rd year">3rd year</option>
                    <option value="4th year">4th year</option>
                </select>
                <h5 style={{ margin: '20px' }}>Gender</h5>
                <input type="radio" id="male" name="gender"value="Male" onChange={(e)=>setGender(e.target.value)}
                style={{ marginLeft: "20px" }}/>
                <label >Male</label>
                <input type="radio" id="female" name="gender"value="Female" onChange={(e)=>setGender(e.target.value)}
                style={{ marginLeft: "20px" }}/>
                <label>Female</label>
                <button type = "submit" className="btn btn-dark" 
                style={{margin:"30px",flexDirection:"column",display:"flex"}}>Register</button>
            </form>

        </div>
        </div>
    );
}
export default Register;