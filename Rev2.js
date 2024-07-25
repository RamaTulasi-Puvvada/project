function Revs(){
    const[review,setReview]=useState('');
    const[reviewToDisplay,setDisplay]=useState('');
    const inputValueChanged=(event)=>{
        console.log(event.target.value);
        setReview(event.target.value);

    }
    const addReview=()=>{
        console.log("Adding review....");
        setDisplay(review);

    }
    return(
        <div>
            <input type="text" placeholder="Enter a review"></input>
            <button className="btn btn-dark" onClick={addReview}>Add Review</button>
        </div>
    );
}
export default Revs;