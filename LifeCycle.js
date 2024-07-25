import React from "react";
class LifeCycle extends React.Component{
    count=0;
    constructor(){
        super();
        console.log("Constructor is called");
        this.state={
            number:1
        };
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number);

    }
    componentWillUnmount(){
        console.log("WIll unmounted");

    }
    funname=()=>{
        this.count=this.count+1;
        console.log("Button clicked"+this.count);

        this.setState({number:this.state.number+1});

    }
    render(){
        return(
            <div>Hiii
                <h1>count:{this.count}</h1>
            <button onClick={this.funname} className="btn btn-primary">Click</button>

            </div>

        );
    }

}
export default LifeCycle;