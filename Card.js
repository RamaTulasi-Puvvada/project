function CardUI(props){

    return (
        <div className="card" style={{width:'25rem'}}>
            <img src="/member.png" width={100} style={{border:'2px solid #FF5690',borderRadius:'80px'}}/>
         <div className="card-body">
            <h2>{props.userFromArray}</h2>
            <h6>{props.object.id}</h6>
            <h5>{props.object.clg}</h5>


            <button type="button" class="btn btn-primary">Connect</button>
            </div>
        </div>


    );
}
export default CardUI;