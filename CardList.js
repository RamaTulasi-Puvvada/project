import CardUI from "./Card"
const name="ReactJS";
const clgname ="SVECW";
const users=["Tulasi","Geetha","Afreen","Sujana","Rishitha","Manogna"]

const obj={
    name:"Tulasi",
    id:"E5",
    clg:"SVECW"
};
function CardlistUI(){

    return (
       <div style={{display:'flex',felxWrap:'wrap'}}>
        {
            users.map((user,index)=>(<CardUI key={index}
                
                userFromArray={user} object={obj}/>)


            )
        }
        
        
      
        
       </div>
    );
    // return (
    //     <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}} >
    //         <CardUI program={name} college={clgname}  details={obj}/>
    //         <CardUI program={name} college={clgname}  details={obj}/>
    //         <CardUI program={name} college={clgname}  details={obj}/>
    //         <CardUI program={name} college={clgname}  details={obj}/>
    //         <CardUI program={name} college={clgname}  details={obj}/>            
    //         <CardUI program={name} college={clgname}  details={obj}/> 
    //         <CardUI program={name} college={clgname}  details={obj}/>            
    //         <CardUI program={name} college={clgname}  details={obj}/>  
    //     </div>
    // );
}
export default CardlistUI;