import React from 'react'
import iconAbc from './../../assets/img/icons/abc-blocks.svg'
import iconPhone from './../../assets/img/icons/phone.svg'
import iconChat from './../../assets/img/icons/chat.svg'
import iconWhatsapp from './../../assets/img/icons/whatsapp_white.svg'
import iconMail from './../../assets/img/icons/mail.svg'


const ElementContact = () => {
    return (
        <div className="component contact-box">
            <div className="component-head d-flex">
                <img className="icono" alt="abc" src={iconAbc}/>
                <div className="d-flex flex-column">
                    <h5>
                        ¿Tienes dudas o consultas?
                    </h5>
                    <span>
                        Nos puedes llamar, enviar un correo o iniciar un chat por WhatsApp.
                    </span>
                </div>
            </div>
            <div className="component-body pb-3 pb-lg-0">
                <div className="row px-1 px-md-3">
                    <div className="col-3 col-md-3 px-1 ">
                        <button type="submit" className="py-2 justify-content-center d-flex flex-column flex-md-row align-items-center btn btn-primary">
                            <img alt="phone" src={iconPhone}/>
                            <span>Teléfono</span>
                            </button>
                    </div>
                    <div className="col-3 col-md-3 px-1 ">
                        <button type="submit" className="py-2 justify-content-center d-flex flex-column flex-md-row align-items-center btn btn-primary">
                            <img alt="chat" src={iconChat}/>
                            <span className="d-none d-lg-block">Iniciar Chat</span>
                            <span className="d-lg-none">Chat</span>
                            </button>
                    </div>
                    <div className="col-3 col-md-3 px-1 ">
                        <button type="submit" className="py-2 justify-content-center d-flex flex-column flex-md-row  align-items-center btn btn-primary">
                            <img alt="whatsapp" src={iconWhatsapp}/>
                            <span>WhatsApp</span>
                        </button>
                    </div>
                    <div className="col-3 col-md-3 px-1 ">
                        <button type="submit" className="py-2 justify-content-center d-flex flex-column flex-md-row  align-items-center btn btn-primary">
                            <img alt="mail" src={iconMail}/>
                            <span className="d-none d-lg-block">Enviar Correo</span>
                            <span className="d-lg-none">Correo</span>
                            </button>
                    </div>
                </div>

            </div>
    </div>
    )
}

export default ElementContact
