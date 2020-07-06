import React from 'react'
import iconNewsletter from './../../assets/img/icons/cat_newsletter.svg'

const ElementNewsletter = () => {
    return (
        <div>
            <div className="component newsletter-box">
                <div className="component-head d-flex">
                    <img className="icono" alt="newsletter" src={iconNewsletter} />
                    <h5>
                        ¿Te gustaría recibir nuestro Newsletter con noticias, novedades y ofertas?
                    </h5>
                </div>
                <div className="component-body">
                    <div className="d-desktop">
                        <div className="d-flex align-items-start ">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tucorreo@email.com"/>
                                <small id="emailHelp" className="form-text text-muted">Te enviaremos un correo de confirmación para verificar tu identidad.</small>
                            </div>
                            <button type="submit" className="btn">Suscribirme al newsletter</button>
                        </div>
                    </div>
                    <div className="d-mobile">
                        <div className="d-flex flex-column align-items-center ">
                            <button type="submit" className="btn btn-primary">Suscribirme al newsletter</button>
                            <small id="emailHelp" className="form-text text-muted">Te enviaremos un correo de confirmación para verificar tu identidad.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElementNewsletter
