
import React from 'react';
import Product from './Product';

function NewProducts() {
    let files = [];
    for(let j=1; j<=8; j++) files.push(`n${j}.jpg`);
    let productsList = [];
    productsList = files.map(file => {
        return (<Product img={file}/>);
    });
    return (
        <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">            
            {productsList}
        </div>
    </section>
    );
  }

  export default NewProducts;
  




/**
 * 
 * <section id="product2" class="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="pro-container">
            <div class="pro">
                <img src="img/products/f1.jpg" alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>

                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i class="fal fa-basket-shopping"></i></a>
            </div>
    </div>
    </section>
 */