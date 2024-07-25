import {useRef} from "react";
function Form(){
    const firstRef = useRef(null);//reference
    
    const formSubmitted=(event)=>{
        event.preventDefault();//prevents reloading of browser
        console.log("Form Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value='';//value will be cleared after submitting
    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef}/>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}
export default Form;