import React from 'react';
import Product from './Product';

function Products() {
    let files = [];
    for(let i=1; i<=8; i++) files.push(`f${i}.jpg`);
    let productsList = [];
    productsList = files.map(file => {
        return (<Product img={file}/>);
    });
    return (
        <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">            
            {productsList}
        </div>
    </section>
    );
  }

  export default Products;
  

/*
 * <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src="img/products/f1.jpg" alt="">
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
    </div>
    </section>
 */