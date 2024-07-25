import { useEffect,useState } from "react";

function DataFetching(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchMydata= async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const resData=await res.json;
            setData(resData);
            console.log(resData);
        }
        fetchMydata();
    })
    return(
        <div>Fetching data
            {data.map((dataItem,index)=>
            <div key={index}>{dataItem.title}</div>)}
        </div>
    )

}
export default DataFetching;