import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useEffect } from "react";
import { getTotals } from "../features/cartSlice";

import { Link } from "react-router-dom";
import { viewProduct } from "../features/detailSlice";




const Home = () => {
    
    

    const cart = useSelector((state) => state.cart);
    const {data, error, isLoading} = useGetAllProductsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);
  

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
   
    };

    const handleViewProduct = (product) => {
        dispatch(viewProduct(product));
   
    };

    


    return (
        <div className="home-container">
            { isLoading ? <p>Loading...</p> : error ? 
            <p>An error occured..</p> :
            <>
            <h2>Fresh Vegetables</h2>
            <div className="products">
                {data?.map(product => <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.img} alt={product.name} />
                    <div className="details">
                        <span>{product.info}</span>
                        <span className="price">${product.price}</span>
                    </div>
                    <div className="home-buttons">
                    <button className="home-button1" onClick= {() => handleAddToCart(product)}>Add To Cart</button>
                    <Link to="/product">
                    <button className="home-button2" onClick={() => handleViewProduct(product)}>View Product</button>
                    </Link>
                    </div>
                    
                    
                    
                    
                </div> )}

            </div>
            </>}

        </div>
    );
}
 
export default Home;