


function Product(props) { 
    return (
        <div className="pro">
            <img src={`/products/${props.img}`} alt=""/>
            <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4>$78</h4>
        </div>
        <a href="#"><i className="fal fa-basket-shopping"></i></a>
    </div>
    );
  }
  
  export default Product;
  