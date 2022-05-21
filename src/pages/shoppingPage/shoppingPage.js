

import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import QuantityBtn from 'pages/shoppingPage/quantityBtn'
import { getProduct } from 'apis/WebAPI';


const ShoppingIndex = () => {
  let [productList, setProductList] = useState([])

  useEffect(()=>{
    const data = getProduct()
    console.log(data);
    setProductList(data)

  },[])

  return (
  <div className="container">
    {
        productList.map(product=>(
            <React.Fragment key={product.id}>
                <div className="containerItem">
                    <Link to={'/product/'+product.id}>
                        <img src={process.env.PUBLIC_URL+'/images/'+product.image} alt={product.name} />
                    </Link>

                    <div className="productName">
                       {product.name}  -   NT. {product.price}/one
                    </div>
                    <QuantityBtn productInfo={product} />
                </div>

            </React.Fragment>
        ))
    }
  </div>
  );
}


export default ShoppingIndex;