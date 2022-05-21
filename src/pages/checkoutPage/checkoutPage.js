import Title from "common/title.js"
import { Link } from 'react-router-dom'
import QuantityBtn from 'pages/shoppingPage/quantityBtn'
import { UseAppContext } from 'contexts/contexts';

import { CheckOutlined } from '@ant-design/icons';


export default function checkoutPage() {
  const { apiValue:{ cartItems, setCartItems } } = UseAppContext();

    let cartEmpty = cartItems.length<=0 ? true : false

    let grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
    },0)
    const freeShippingPrice = 400

    return (
        <>
            <Title mainTitle="Your Shopping Cart" />

            {
                cartEmpty &&
                <div>
                    <div className="nothingInCart">There are no items in the shopping cart<br/><br/>
                    <Link to="/">Check out the product page</Link></div>
                </div>
            }

            {
                !cartEmpty &&
                <div className="container">
                    <div className="cartSection">
                        <table className="checkoutTable">
                            <tbody>
                                {
                                    cartItems.map(product=>(
                                        <tr key={product.id}>
                                            <td>
                                                <Link to={'/ItemDetailPage/'+product.id}>
                                                <img src={process.env.PUBLIC_URL+'/images/'+product.image} alt={product.name}/>
                                                </Link>
                                            </td>
                                            <td>
                                              <p>Name : {product.name}</p>
                                              <p>Price : NT. {product.price}</p>
                                              <p>Description : {product.description}</p><br/>

                                            </td>
                                            <td width="200">
                                                <QuantityBtn productInfo={product} />
                                            </td>
                                            <td>
                                                <div className="productSubTotal">
                                                    ${product.price*product.quantity}
                                                </div>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="checkoutSection">
                        <div>All items total </div>
                        <div className="grandTotal">NT. {grandTotal}</div>
                        {
                            grandTotal >= freeShippingPrice ?
                            <div className="freeShipping"><CheckOutlined />We deliver free</div> :
                            <div className="noShipping">Free delivery for over ${freeShippingPrice}<br/>still less than ${freeShippingPrice-grandTotal}</div>
                        }
                        <button>Checkout payment</button>
                    </div>
                </div>
            }

        </>
    )
}
