import React from 'react';
class ClassCompo extends React.Component{
    name="React";
    num=20;
    
    
    render(){
        return(
            <div>
                This is a Class Component
                <p>{this.num} {this.name}</p>
                <button class="btn btn-primary">Click</button>

            </div>

        );
    }
}
export default ClassCompo;