import {useParams, Link} from "react-router-dom"
import Title from "common/title.js"
import QuantityBtn from 'components/shoppingPage/quantityBtn'
import { useState,useEffect } from "react"
import { RollbackOutlined } from '@ant-design/icons';

export default function ItemDetailPage() {
    let params = useParams()
    let [productDetail, setProductDetail] = useState(null)

    useEffect(()=>{
         fetch('jsonData/product.json')
            .then(response => response.json())
            .then(data => {
                let productInfo = data.find((element)=>{
                    return element.id === parseInt(params.id)
                })
                setProductDetail(productInfo)
            })
    },[params.id])

    return (
        <div>
            {
                productDetail &&
                <div className="ProductDetail">
                    <Title mainTitle={productDetail.name+'Product Info.'} />

                    <table width="100%">
                        <tbody>
                        <tr>
                            <td align="right">
                                <img src={process.env.PUBLIC_URL+'/images/'+productDetail.image} alt={productDetail.name} width="400" />
                            </td>
                            <td width="45%" padding="10">
                                <p>Name : {productDetail.name}</p>
                                <p>Price : NT. {productDetail.price}</p>
                                <p>Description : {productDetail.description}</p><br/>
                                <QuantityBtn productInfo={productDetail} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }

            <Link to="/" >
                <div className="backToGoodsListBtn"><RollbackOutlined /> Back To List</div>
            </Link>
        </div>
    )
}
