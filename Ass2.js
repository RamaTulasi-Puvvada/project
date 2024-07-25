function Product(){
    return(
        <div>
            <h1>Product Name</h1>
            
            <div style={{display:'flex'}}>
                <div>
                <img src="/member.png"/>
               
              </div>
              <div>
              <h4>Product Name</h4>
                <p>Description Description Description Description Description Description Description Description Description Description</p>
                <h2>500</h2>
                <button type="button" className="btn btn-Success">Add to Cart</button>
                </div>
                
            </div>
            <div>
                    <h4>Product Specifications</h4>
                    <p>Description Description Description Description Description Description Description Description Description DescriptionDescription Description Description Description Description Description Description Description Description Description</p>
                </div>
                
        </div>
    );
}
export default Product;