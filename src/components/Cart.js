import React from "react";

function Cart(props){
    const { cart, onRemoveFromCart} = props
    
    return(
        <div className="shopping-cart">
            <ul>
                {cart.map((item,index)=>(
                    <li key={index}>
                        <div className="orden-comida">
                            <img className="pizza-carrito" src={item.image}></img>
                            <div>
                                <div className="porciones">
                                    <h1 className="nom-comida">{item.nombre} </h1>
                                </div>
                                <h6>Fast Food</h6>
                                <h1 className="orden-precio">${item.precio}</h1>
                            </div>
                            <img onClick = {()=>onRemoveFromCart(index)} class="x" src="./imagenes/x.png" alt=""></img>
                        </div>
                    </li>
                ))}
            </ul>
            <h4 className="total-car">Total del carrito</h4>
            <div className="barra-roja"></div>
            <div className="total-carrito">
                <h1>Subtotal: </h1>
                <h1 className="precio">${cart.reduce((total,item) => total + item.precio, 0)}</h1>
            </div>
        </div>
    )
}

export default Cart