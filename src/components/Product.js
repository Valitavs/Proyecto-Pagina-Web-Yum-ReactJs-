import React from "react";

function Product(props){
    const { product,onAddToCart} = props

    return (
        <div className="product">
            <img src={product.image} alt={product.nombre}/>
            <h3>{product.nombre}</h3>
            <h4>Precio: ${product.precio}</h4>
            <h4>Lorem ipsum dolor sit</h4>
            <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
        </div>
    )
}

export default Product