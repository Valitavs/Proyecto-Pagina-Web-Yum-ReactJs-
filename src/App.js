import React, { useState } from "react";
import './styles/styles.css'
import Product from "./components/Product";
import Cart from "./components/Cart";

function App(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [products] = useState([
        {
            id: 1,
            nombre: 'Pizza',
            precio: 45000,
            image: '/imagenes/pizza.jpg'
        },
        {
            id: 2,
            nombre: 'Hamburguesa',
            precio: 45000,
            image: '/imagenes/hamburguesa.jpg'
        },
        {
            id: 3,
            nombre: 'Sushi',
            precio: 45000,
            image: '/imagenes/sushi.jpg'
        }
    ])
    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        setCart([...cart,product])
    }

    const removeFrontCart = (index) =>{
        const updateCart = [...cart]
        updateCart.splice(index,1)
        setCart(updateCart)
    }

    const Modal = ({isOpen, closeModal}) => {
        if(!isOpen) return null;
    
    
      return (

        //DENTRO DEL MODAL SE HA CREADO LA ESTRUCTURA DEL CARRITO DE COMPRAS
        
        <section className="carrito-compras">
            <div className="modal-container"  id="modal_container" >
                <div className="modal">
                    <div className="car-x">
                        <h1 className="text-carrito">Carrito de Compras</h1>
                        <a onClick={closeModal}>
                        <img src="./imagenes/x-gris.png" alt=""></img>
                        </a>
                    </div>
                    <div className="barra-roja"></div>
                    {/*Se llama la funcion Cart que muestra la lista de los productos seleccionado con su repectiva funcion de borrar productos que no se desea del carrito*/}
                    <Cart cart={cart} onRemoveFromCart={removeFrontCart}></Cart> 
    
                    <div className="confirmar-pedido">

                        <button className="button-confirmar">Confirmar Pedido</button>
                    </div>
                </div>
            </div>
        </section>
        
      )
    }
    

    return(
        <div className="app">

            {/*INICIO-SECCION CARRITO DE COMPRAS OVERLAY====================================================================================-->
            SE CREO UNA VENTANA MODAL PARA EL CARRITO DE COMPRAS*/}
            
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
            
            {/*<!--FINAL-SECCION CARRITO DE COMPRAS OVERLAY====================================================================================-->*/}

            {/*<!--INICIO-SECCION NAVBAR HEADER====================================================================================-->*/}
            <header>
                <div class="container-inicial">
                    <img class="icono-correo" src="/imagenes/correo-electronico.png" alt="icono-correo"></img>
                    <h5 class="correo-info">info@ejemplo.com</h5>
                    <img class="icono-face-head" src="/imagenes/facebook.png" alt=""></img>
                    <img class="icono-twitter-head" src="/imagenes/twitter.png" alt=""></img>
                    <img class="icono-insta-head" src="/imagenes/instagram.png" alt=""></img>
                    <img class="icono-you-head" src="/imagenes/youtube.png" alt=""></img>
                    <a href=""><h5 class="login">Iniciar Sesión</h5></a>
                </div>
                <div class="nav-bar">
                    <a href="/Pagina de inicio/" class="logo">
                        <img src="/imagenes/Logo.png" alt="logoimg"></img>
                    </a>
                    <nav class="links">
                        <a href="" class="nav-link">Inicio</a>
                        <a href="" class="nav-link">Contacto</a>
                        <a href="" class="nav-link">Restaurantes</a>
                        <a href="" class="nav-link">Registrarse</a>
                        <a href="" class="nav-link">
                            Paginas
                            <img class="flecha-abajo" src="/imagenes/flecha-hacia-abajo-para-navegar.png" alt=""></img>
                        </a>
                        <button onClick={() => setIsModalOpen(true)} class="button-carrito">
                            <img class="icono-carrito" src="/imagenes/carrito-de-compras.png" alt=""></img>
                        </button>
                    </nav>
                </div>
            </header>
            {/*<!--FINAL-SECCION NAVBAR HEADER====================================================================================--></img>*/}

            {/*<!--INICIO-SECCION SLIDE SHOW====================================================================================-->*/}


            <section class="incial-slidershow">
                <div class="slider-frame">
                    <ul>
                        <li><img class="slider" src="/imagenes/slider1.jpg" alt=""></img></li>
                        <li><img class="slider" src="/imagenes/slider2.jpg" alt=""></img></li>
                        <li><img class="slider" src="/imagenes/slider3.jpg" alt=""></img></li>
                        <li><img class="slider" src="/imagenes/slider4.jpg" alt=""></img></li>
                    </ul>
                    <img class="icono-restaurante" src="/imagenes/restaurante.png" alt=""></img>
                    <h6 class="texto-slider5" >La Manera fácil de pedir tu comida</h6>
                    <h1 class="texto-slider">Nosotros Somos La Web <br></br> Definitiva Para Sus Domicilios</h1>
                    <h6 class="texto-slider2">Lorem ipsum dolor sit amet consectetur adipiscing elit velit porttitor senectus, quisque</h6>
                    <h6 class="texto-slider3">sodales torquent montes commodo nec dis mus condimentum taciti lectus.</h6>
                    <h6 class="texto-slider4">Lorem ipsum dolor sit amet consectetur adipiscing elit velit porttitor senectus.</h6>

                    <input class="input-inicio" type="text" id="restaurante" placeholder="NOMBRE DEL RESTAURANTE"></input>
                    <div class="icono-buscar">
                        <img src="/imagenes/lupa.png" alt=""></img>
                    </div>

                    <input class="input-inicio2" type="text" id="restaurante" placeholder="LOCACIÓN"></input>
                    <div class="icono-ubicacion">
                        <img src="/imagenes/pasador-de-ubicacion.png" alt=""></img>
                    </div>
                    <a href="" class="button-buscar">
                        <h6>Buscar</h6>
                    </a>

                    <h1 class="res-top">Restaurantes Populares</h1>

                    <div class="container-slidelogo">
                        <div class="slider-logo">
                            <div class="slider2">
                                <img src="/imagenes/logores2.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores3.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores4.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores2.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores3.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores2.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores4.png" alt=""></img>
                            </div>

                            <div class="slider2">
                                <img src="/imagenes/logores3.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores3.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores2.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores4.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores3.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores2.png" alt=""></img>
                            </div>
                            <div class="slider2">
                                <img src="/imagenes/logores4.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!--FINAL-SECCION SLIDE SHOW====================================================================================-->*/}

            {/*<!--INICIO-SECCION COMIDAS====================================================================================-->
            La funcion product muestra los productos disponibles para agregar al carrito de compras*/}

            <section class="top-comidas">
                <div class="top-incontext">
                    <img class="icono-res" src="/imagenes/restaurante-negro.png" alt=""></img>
                    <h6>Comidas Populares</h6>
                </div>
                <div class="text1-topcomidas">
                    <h1>Mas de </h1>
                    <h2>10.000 comidas </h2>
                    <h3>para ordenar.</h3>
                </div>  
                <div className="product-list">
                    {products.map((product)=>(
                        <Product key={product.id} product={product} onAddToCart = {addToCart}></Product>
                    ))}
                </div>
                <div class="divbuttonco">
                    <a class="button-topco" href="">Mas articulos</a>
                </div>
            </section>

            {/*<!--FIN-SECCION COMIDAS====================================================================================-->*/}

            {/*<!--INICIO-SECCION RESTAURANTES====================================================================================-->*/}

            <section class="top-restaurantes">
                <img class="icono-res2" src="/imagenes/restaurante-negro.png" alt=""></img>
                <h6 class="restau-popu">Restaurantes Populares</h6>
                <div class="text1-topcomidas">
                    <h1>Puedes elegir entre los </h1>
                    <h2>Restaurantes </h2>
                    <h3>mas populares.</h3>
                </div>  
                <div class="container-restaurantestop">
                    <div class="res-carta">
                        <img class="rescarta-img" src="/imagenes/pizza.jpg" alt=""></img>
                        <div class="nombreres-star">
                            <a href=""><h1 class="nombre-restext">Fast Food</h1></a>
                            <div class="div-star-topres">
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrellam.png" alt=""></img>
                            </div>
                        </div>
                        <h6 class="tipo-co">Tipo de comida: Hamburguesa, helado, papas fritas</h6>
                        <div class="res-imgandinfo">
                            <a href=""><img src="/imagenes/fast-food-logo-design-free-vector.jpg" alt=""></img></a>
                            <div class="res-info">
                                <div class="res-info1">
                                    <img src="/imagenes/reloj-de-pared.png" alt=""></img>
                                    <h6>12:30 am - 10:12 pm</h6>
                                </div>
                                <div class="res-info2">
                                    <img src="/imagenes/maparojo.png" alt=""></img>
                                    <h6>Cr 18 No. 86A-14, C.P 11001</h6>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    <div class="res-carta">
                        <img class="rescarta-img" src="/imagenes/pizza.jpg" alt=""></img>
                        <div class="nombreres-star">
                            <a href=""><h1 class="nombre-restext">Fast Food</h1></a>
                            <div class="div-star-topres">
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrellam.png" alt=""></img>
                            </div>
                        </div>
                        <h6 class="tipo-co">Tipo de comida: Hamburguesa, helado, papas fritas</h6>
                        <div class="res-imgandinfo">
                            <a href=""><img src="/imagenes/fast-food-logo-design-free-vector.jpg" alt=""></img></a>
                            <div class="res-info">
                                <div class="res-info1">
                                    <img src="/imagenes/reloj-de-pared.png" alt=""></img>
                                    <h6>12:30 am - 10:12 pm</h6>
                                </div>
                                <div class="res-info2">
                                    <img src="/imagenes/maparojo.png" alt=""></img>
                                    <h6>Cr 18 No. 86A-14, C.P 11001</h6>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    <div class="res-carta">
                        <img class="rescarta-img" src="/imagenes/pizza.jpg" alt=""></img>
                        <div class="nombreres-star">
                            <a href=""><h1 class="nombre-restext">Fast Food</h1></a>
                            <div class="div-star-topres">
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrellam.png" alt=""></img>
                            </div>
                        </div>
                        <h6 class="tipo-co">Tipo de comida: Hamburguesa, helado, papas fritas</h6>
                        <div class="res-imgandinfo">
                            <a href=""><img src="/imagenes/fast-food-logo-design-free-vector.jpg" alt=""></img></a>
                            <div class="res-info">
                                <div class="res-info1">
                                    <img src="/imagenes/reloj-de-pared.png" alt=""></img>
                                    <h6>12:30 am - 10:12 pm</h6>
                                </div>
                                <div class="res-info2">
                                    <img src="/imagenes/maparojo.png" alt=""></img>
                                    <h6>Cr 18 No. 86A-14, C.P 11001</h6>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    <div class="res-carta">
                        <img class="rescarta-img" src="/imagenes/pizza.jpg" alt=""></img>
                        <div class="nombreres-star">
                            <a href=""><h1 class="nombre-restext">Fast Food</h1></a>
                            <div class="div-star-topres">
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrellam.png" alt=""></img>
                            </div>
                        </div>
                        <h6 class="tipo-co">Tipo de comida: Hamburguesa, helado, papas fritas</h6>
                        <div class="res-imgandinfo">
                            <a href=""><img src="/imagenes/fast-food-logo-design-free-vector.jpg" alt=""></img></a>
                            <div class="res-info">
                                <div class="res-info1">
                                    <img src="/imagenes/reloj-de-pared.png" alt=""></img>
                                    <h6>12:30 am - 10:12 pm</h6>
                                </div>
                                <div class="res-info2">
                                    <img src="/imagenes/maparojo.png" alt=""></img>
                                    <h6>Cr 18 No. 86A-14, C.P 11001</h6>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    <div class="res-carta">
                        <img class="rescarta-img" src="/imagenes/pizza.jpg" alt=""></img>
                        <div class="nombreres-star">
                            <a href=""><h1 class="nombre-restext">Fast Food</h1></a>
                            <div class="div-star-topres">
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrellam.png" alt=""></img>
                            </div>
                        </div>
                        <h6 class="tipo-co">Tipo de comida: Hamburguesa, helado, papas fritas</h6>
                        <div class="res-imgandinfo">
                            <a href=""><img src="/imagenes/fast-food-logo-design-free-vector.jpg" alt=""></img></a>
                            <div class="res-info">
                                <div class="res-info1">
                                    <img src="/imagenes/reloj-de-pared.png" alt=""></img>
                                    <h6>12:30 am - 10:12 pm</h6>
                                </div>
                                <div class="res-info2">
                                    <img src="/imagenes/maparojo.png" alt=""></img>
                                    <h6>Cr 18 No. 86A-14, C.P 11001</h6>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    <div class="res-carta">
                        <img class="rescarta-img" src="/imagenes/pizza.jpg" alt=""></img>
                        <div class="nombreres-star">
                            <a href=""><h1 class="nombre-restext">Fast Food</h1></a>
                            <div class="div-star-topres">
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrella.png" alt=""></img>
                                <img src="/imagenes/estrellam.png" alt=""></img>
                            </div>
                        </div>
                        <h6 class="tipo-co">Tipo de comida: Hamburguesa, helado, papas fritas</h6>
                        <div class="res-imgandinfo">
                            <a href=""><img src="/imagenes/fast-food-logo-design-free-vector.jpg" alt=""></img></a>
                            <div class="res-info">
                                <div class="res-info1">
                                    <img src="/imagenes/reloj-de-pared.png" alt=""></img>
                                    <h6>12:30 am - 10:12 pm</h6>
                                </div>
                                <div class="res-info2">
                                    <img src="/imagenes/maparojo.png" alt=""></img>
                                    <h6>Cr 18 No. 86A-14, C.P 11001</h6>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
                <div class="divbuttonres">
                    <a class="button-topres" href="">Mas restaurantes</a>
                </div>
            </section>

            {/*<!--FIN-SECCION RESTAURANTES====================================================================================-->*/}

            {/*<!--INICIO-SECCION COMENTARIOS=================================================================================-->*/}

            <section class="comentarios">
                <img class="icono-res2" src="/imagenes/restaurante-negro.png" alt=""></img>
                <h6 class="restau-popu">Clientes Satisfechos</h6>
                <div class="text1-topcomidas">
                    <h1>Lo que dicen nuestros </h1>
                    <h2>Clientes</h2>
                    <h3>.</h3>
                </div>  
                <div class="container-comentarios">
                    <div class="slider-com">
                        <div class="slides-com">
                            <input type="radio" name="radio-btn" id="radio1"></input>
                            <input type="radio" name="radio-btn" id="radio2"></input>
                            <input type="radio" name="radio-btn" id="radio3"></input>
                            <input type="radio" name="radio-btn" id="radio4"></input>
                            
                            <div class="slide-com first">
                                <div class="comentario1">
                                    <div class="star-com">
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrellam.png" alt=""></img>
                                    </div>
                                    <h1>Gran servicio, rápido y confiable.</h1>
                                    <h6>Amo el servicio de domicilio que presta Yum, es<br></br> muy rapido y preciso, me encanta sus sugerencias <br></br>en platos y restaurantes.</h6>
                                    <div class="usuario-com">
                                        <div class="imgusuario-com">
                                            <img src="/imagenes/usuario.jpg" alt=""></img>
                                        </div>
                                        <div class="textuser-com">
                                            <h6>Andres White</h6>
                                            <h5>Cliente</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-com">
                                <div class="comentario1">
                                    <div class="star-com">
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrellam.png" alt=""></img>
                                    </div>
                                    <h1>Gran servicio, rápido y confiable.</h1>
                                    <h6>Amo el servicio de domicilio que presta Yum, es<br></br> muy rapido y preciso, me encanta sus sugerencias <br></br>en platos y restaurantes.</h6>
                                    <div class="usuario-com">
                                        <div class="imgusuario-com">
                                            <img src="/imagenes/usuario.jpg" alt=""></img>
                                        </div>
                                        <div class="textuser-com">
                                            <h6>Andres White</h6>
                                            <h5>Cliente</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-com">
                                <div class="comentario1">
                                    <div class="star-com">
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrellam.png" alt=""></img>
                                    </div>
                                    <h1>Gran servicio, rápido y confiable.</h1>
                                    <h6>Amo el servicio de domicilio que presta Yum, es<br></br> muy rapido y preciso, me encanta sus sugerencias <br></br>en platos y restaurantes.</h6>
                                    <div class="usuario-com">
                                        <div class="imgusuario-com">
                                            <img src="/imagenes/usuario.jpg" alt=""></img>
                                        </div>
                                        <div class="textuser-com">
                                            <h6>Andres White</h6>
                                            <h5>Cliente</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-com">
                                <div class="comentario1">
                                    <div class="star-com">
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrella.png" alt=""></img>
                                        <img src="/imagenes/estrellam.png" alt=""></img>
                                    </div>
                                    <h1>Gran servicio, rápido y confiable.</h1>
                                    <h6>Amo el servicio de domicilio que presta Yum, es<br></br> muy rapido y preciso, me encanta sus sugerencias <br></br>en platos y restaurantes.</h6>
                                    <div class="usuario-com">
                                        <div class="imgusuario-com">
                                            <img src="/imagenes/usuario.jpg" alt=""></img>
                                        </div>
                                        <div class="textuser-com">
                                            <h6>Andres White</h6>
                                            <h5>Cliente</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="navigation-auto">
                                <div class="auto-btn1"></div>
                                <div class="auto-btn2"></div>
                                <div class="auto-btn3"></div>
                                <div class="auto-btn4"></div>
                            </div>
                        </div>
                        
                        <div class="navigation-manual">
                            <label for="radio1" class="manual-btn"></label>
                            <label for="radio2" class="manual-btn"></label>
                            <label for="radio3" class="manual-btn"></label>
                            <label for="radio4" class="manual-btn"></label>
                        </div>
                    </div>
                </div>
            </section> 
            
            {/*<!--FIN-SECCION COMENTARIOS=================================================================================-->*/}

            {/*<!--INICIO-SECCION DE ARTICULOS==================================================================================-->*/}

            <section class="Articulos-Blogs">
                <img class="icono-res3" src="/imagenes/restaurante-negro.png" alt=""></img>
                <h6 class="restau-popu">Ultimos Blogs</h6>
                <div class="text1-topcomidas">
                    <h1>Últimos </h1>
                    <h2>Blogs </h2>
                    <h3>Y Artículos.</h3>
                </div>  
                <div class="container-comidastop">
                    <div class="carta-blog">
                        <img src="/imagenes/pizza.jpg" alt=""></img>
                        <a href=""><h1 class="blog-titulo">Los platos mas populares de esta semana.</h1></a>
                        <a href=""><h6 class="blog-parrafo">Desde raviolis con espinacas y ricotta hasta farfalle con champiñones.</h6></a>
                        <div class="blog-usuario">
                            <img src="/imagenes/usuario.jpg" alt=""></img>
                            <div>
                                <h6 class="blog-name">Agustin Cebrian</h6>
                                <h6 class="blog-fecha">Marzo 22, 2023</h6>
                            </div>
                        </div>
                    </div>
                    <div class="carta-blog">
                        <img src="/imagenes/pizza.jpg" alt=""></img>
                        <h1 class="blog-titulo">Los platos mas populares de esta semana.</h1>
                        <h6 class="blog-parrafo">Desde raviolis con espinacas y ricotta hasta farfalle con champiñones.</h6>
                        <div class="blog-usuario">
                            <img src="/imagenes/usuario.jpg" alt=""></img>
                            <div>
                                <h6 class="blog-name">Agustin Cebrian</h6>
                                <h6 class="blog-fecha">Marzo 22, 2023</h6>
                            </div>
                        </div>
                    </div>
                    <div class="carta-blog">
                        <img src="/imagenes/pizza.jpg" alt=""></img>
                        <h1 class="blog-titulo">Los platos mas populares de esta semana.</h1>
                        <h6 class="blog-parrafo">Desde raviolis con espinacas y ricotta hasta farfalle con champiñones.</h6>
                        <div class="blog-usuario">
                            <img src="/imagenes/usuario.jpg" alt=""></img>
                            <div>
                                <h6 class="blog-name">Agustin Cebrian</h6>
                                <h6 class="blog-fecha">Marzo 22, 2023</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divbuttonco1">
                    <a class="button-topco" href="">Mas blogs</a>
                </div>
            </section>

            {/*<!--FIN-SECCION DE ARTICULOS==================================================================================-->*/}

            {/*<!--INICIO-SECCION FOOTER==================================================================================-->*/}

            <section>
                <footer class="footer-inicial">
                    <div class="bar-vacia"></div>
                    <div class="footer-info">
                        <div class="footer-info1">
                            <a href=""><img src="/imagenes/Logo.png" alt=""></img></a>
                            <h6>Lorem ipsum dolor sit amet <br></br>consectetur adipiscing elit orci <br></br>porttitor, mattis arcu.</h6>
                        </div>
                        <div class="footer-info2">
                            <h1>Enlace rápido</h1>
                            <a href=""><h6>Inicio</h6></a>
                            <a href=""><h6>Todos los restaurantes</h6></a>
                            <a href=""><h6>Contacto</h6></a>
                            <a href=""><h6>Detalles del Blog</h6></a>
                        </div>
                        <div class="footer-info3">
                            <h1>Enlace rápido 2</h1>
                            <a href=""><h6>Inicio de sesión</h6></a>
                            <a href=""><h6>Resgistrarse</h6></a>
                            <a href=""><h6>Términos y condiciones</h6></a>
                        </div>
                        <div class="footer-info4">
                            <h1>Contacto</h1>
                            <div>
                                <img src="/imagenes/maparojo.png" alt=""></img>
                                <h6>Tr 39 No. 57A-14, C.P 11001</h6>
                            </div>
                            <div>
                                <img src="/imagenes/llamada-telefonica.png" alt=""></img>
                                <h6>+57 312 587 1547</h6>
                            </div>
                            <div>
                                <img src="/imagenes/correo.png" alt=""></img>
                                <h6>info@ejemplo.com</h6>
                            </div>
                        </div>
                    </div>

                    <div class="bar-footerinfo">
                        <div class="blogs-textcopy">
                            <h6 class="text-redcopy">Copyright © 2023 </h6>
                            <h6 class="text-redcopy2">Yum</h6>
                            <h6 class="text-redcopy3">. Todos los derechos reservados.</h6>
                        </div>
                        <div class="blogs-iconosfoot">
                            <a href=""><img class="icono-face-head" src="/imagenes/facebook.png" alt=""></img></a>
                            <a href=""><img class="icono-twitter-head" src="/imagenes/twitter.png" alt=""></img></a>
                            <a href=""><img class="icono-insta-head" src="/imagenes/instagram.png" alt=""></img></a>
                            <a href=""><img class="icono-you-head" src="/imagenes/youtube.png" alt=""></img></a>
                        </div>
                    </div>

                </footer>
            </section>

        </div> 
  
    )

}

export default App;