import { useEffect,useState } from "react";
function Fun(){
    
    const [count,setCount]=useState(1);
    useEffect(()=>{
        console.log("Use effect is called");
    },[count]);
    const  UpdateCount=()=>{
        setCount(count+1);
    }
    const DecreCount=()=>{
        if(count >0)
        setCount(count-1);
    }
    const AddCart=()=>{
        setCount(1);
    }


    return(
        <div>
        {(count==0)?
        <button type="button" className="btn btn-Success" onClick={AddCart}>Add to Cart</button>
        :
        <div style={{display:'flex'}}>
        <button className="btn btn-primary" onClick={DecreCount} >-</button>
        <h1 style={{padding:'5px'}}>{count}</h1>
        <button className="btn btn-primary" onClick={UpdateCount}>+</button>
        
        </div>
}
        </div>
    );
}
export default Fun;