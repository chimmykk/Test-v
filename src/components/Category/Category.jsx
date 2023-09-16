import {useParams} from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Products from "../Products/Products"
import "./Category.scss";
const Category = () => {
      const {id}=useParams();

      const {data}=useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

    return <div clasName="category-main-content" >
       <div className="layout" style={{ maxWidth: "calc(100% - 20px)",marginLeft:"15px"}}>
           
        <div className="category-title" style={{ fontSize:"24px", margin:"50px 0 ", textTransform:"uppercase", marginLeft:"0"}}>
           {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
        </div>
        <div className="products-container" style={{margin:"20px 0"}}>
        <Products innerPage={true} products={data}/>
       </div>
       </div>
    </div>
};

export default Category;
