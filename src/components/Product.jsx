import { useSelector } from "react-redux";
import detailSlice from "../features/detailSlice";
import { useDispatch } from "react-redux";
import { clearProduct } from "../features/detailSlice";
import { Link } from "react-router-dom";

const Product = () => {
   
    const detail = useSelector((state) => state.detail)
    const dispatch = useDispatch()
    const handleClearProduct = (productDetail) => {
        dispatch(clearProduct())
    }
    return ( <div>
        <h2 className="product-detail1">Product Details</h2>
        {detail.productDetail.length === 0 ? <div>
            <h3 className="product-detail2">No Product To View</h3>
        </div> : <div >
            {detail.productDetail?.map(productDetail => (<div className="product-detail-box" key={productDetail.id}>
              <h3>{productDetail.name}</h3>
              <img className="productimg" src={productDetail.img} alt={productDetail.name} />
              <div className="product-detail-innerbox">
                <p>{productDetail.info}</p>
                <h3>${productDetail.price}</h3>
               </div> 
                <div >
                <Link to={"/"}>
                <button className="product-detail-button" onClick={() => handleClearProduct()}>Go To Home</button>
                </Link>
                </div>
            </div>            
            
            
            ))}
            </div>}
    </div> 
    );
}
 
export default Product;