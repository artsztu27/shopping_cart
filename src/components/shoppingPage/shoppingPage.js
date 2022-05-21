

import React,{ useState, useEffect } from 'react';
import { UseAppContext } from 'contexts/contexts';
import {Link} from 'react-router-dom'
import QuantityBtn from 'components/shoppingPage/quantityBtn'


const ShoppingIndex = () => {
  const { apiValue:{ user, setUser } } = UseAppContext();
  let [productList, setProductList] = useState([])


  //useEffect hook
  useEffect(()=>{
      fetch('jsonData/product.json')
          .then((response) => {
            console.log(response);
            return response.json()
          })
          .then(data => setProductList(data))
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