import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {

    const {cartItems, handleCartProductQuantity,handleRemoveFromCart}=useContext(Context)
    const textstyle={
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "12px",
        fontWeight: 600,
    }
    const svgstyle={
        position: "absolute",
                top: "30px",
                right: 0,
                cursor:" pointer",

    }
    const buttonstyle={
        width: "fit-content",
        display: "flex",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        height: "30px",
        marginBottom: "8px",
    }
    const spanstyle={
        fontSize: "14px",
                    width: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#6b6b6b",
    }
    return (
        <div className="cart-products" style={{flexGrow:"1"}}>
            {cartItems.map(item =>(
                     <div key={item.id}className="cart-product" style={{padding:"20px 15px",display:"flex",gap:"10px"}}>
                     <div className="image-container" style={{width:"60px",height:"60px", backgroundColor:"rgba(0,0,0,0.05)", flexShrink:"0"}}>
                         <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url}  style={{height:"100%",width:"100%"}}alt="" />
                     </div>
                     <div className="prod-details" style={{overflow:"hidden", position:"relative"}}>
                         <span className="name" style={{textOverflow:"ellipsis", fontSize:"16px",whiteSpace:"nowrap",lineHeight:"1",marginBottom:"10px", paddingRight:"25px", display:"block", fontWeight:"600"}}>{item.attributes.title}</span>
                         {/* MdClose component */}
                         <MdClose className="close-btn" style={svgstyle} onClick={()=> handleRemoveFromCart(item)}/>
                         <div className="quantity-buttons" style={buttonstyle}>
                             <span style={spanstyle} onClick={()=> handleCartProductQuantity('dec', item)}>-</span>
                             {/* Quantity */}
                             <span   style={spanstyle}>{item.attributes.quantity}</span>
                             <span style={spanstyle} onClick={()=> handleCartProductQuantity('inc', item)}>+</span>
                         </div>
                         <div className="text" style={textstyle}>
                             {/* Quantity */}
                             <span>{item.attributes.quantity}</span>
                             <span>x</span>
                             {/* Price */}
                             <span style={{color:"#8e2de2"}}>&#8377;{item.attributes.price * item.attributes.quantity}</span>
                         </div>
                     </div>
                 </div>
            ))}
           
        </div>
    );
};

export default CartItem;
