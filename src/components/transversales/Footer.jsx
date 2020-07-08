import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import logoFooter from './../../assets/img/logos/ccs-bt.png'
import logoTarjetas from './../../assets/img/logos/tarjetas.png'
import logoPaypal from './../../assets/img/logos/paypal.png'
import logoRedCompra from './../../assets/img/logos/redCompra.png'

import logoMercadoPago from './../../assets/img/logos/mercadoPago.png'




const Footer = () => {
    return (
        <React.Fragment>
            
                <div className="footer">
                    <div className="container">
                        <div className="row head-footer">
                            <div className="col-12">
                                <a href="/">
                                    <img src={logoFooter} alt="css babytuto"/>
                                </a>
                            </div>
                        </div>
                        <div className="row body-footer">
                            <div className="col">
                                <div className="list-footer">
                                    <h6>SOBRE BABYTUTO</h6>
                                    <p><a href="/">¿Qué es BabyTuto?</a></p>
                                    <p><a href="/">Políticas de Privacidad</a></p>
                                    <p><a href="/">Términos & Condiciones</a></p>
                                    <p><a href="/">Vender en BabyTuto</a></p>
                                   
                                </div>
                            </div>
                            <div className="col">
                                <div className="list-footer">
                                    <h6>Servicio & Soporte</h6>
                                    <p><a href="/">Preguntas Frecuentes</a></p>
                                    <p><a href="/">Cómo Comprar en BabyTuto</a></p>
                                    <p><a href="/">Venta Empresas</a></p>
                                    <p><a href="/">Cambios o Devoluciones</a></p>
                                    <p><a href="/">Plazos & Costos de Entrega</a></p>
                                    <p><a href="/">Contáctanos</a></p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="list-footer">
                                    <h6>FORMAS DE PAGO</h6>
                                    <p><img src={logoRedCompra} alt="Red Compra"/><img src={logoMercadoPago} alt="Mercado Pago"/></p>
                                    <p><img src={logoTarjetas} alt="tarjetas"/></p>
                                    <p><img src={logoPaypal} alt="Paypal"/></p>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="list-footer">
                                    <h6>CONÉCTATE</h6>
                                    <p>
                                        <a className="facebook-icon" href="/">Item</a> 
                                        <a className="twitter-icon" href="/">Item</a>
                                        <a className="instagram-icon" href="/">Item</a> 
                                    </p>
                                    <h6>SUSCRÍBETE AL NEWSLETTER</h6>
                                    <p>Recibe nuestras promociones exclusivas, descuentos y mucho más</p>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="list-footer">
                                    <h6>SERVICIO AL CLIENTE</h6>
                                    <p>info@babytuto.com</p>
                                    <p>+56 9 5099 7542</p>
                                    <p>Showroom: Los Dominicos 7851, Las Condes <small>(Cerrado temporalmente para retiro de productos por COVID-19)</small></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
        
    )
}

export default Footer
