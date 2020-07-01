import React from 'react'
import etapaEmbarazo from "./../../assets/img/icons/etapa_embarazo.png"
import etapa6meses from "./../../assets/img/icons/etapa_6meses.png"
import etapa9meses from "./../../assets/img/icons/etapa_9meses.png"
import etapa12meses from "./../../assets/img/icons/etapa_12meses.png"
import etapa1ano from "./../../assets/img/icons/etapa_1ano.png"


const ElementPillsSteps = () => {
    return (
        <React.Fragment>
            	<div className="list-pills-box mb-3">
                    <ul className="nav nav-pills bt_pills justify-content-center flex-wrap">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="step-btn">
                                    <img className="rounded-icon" alt="embarazo" src={etapaEmbarazo}/> 
                                    <small>Embarazo</small>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="step-btn">
                                    <img className="rounded-icon" alt="6 meses" src={etapa6meses}/> 
                                    <small>0 - 6 meses</small>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="step-btn">
                                    <img className="rounded-icon" alt="9 meses" src={etapa9meses}/> 
                                    <small>0 a 9 meses</small>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="step-btn">
                                    <img className="rounded-icon" alt="12 meses" src={etapa12meses}/> 
                                    <small>9 a 12 meses</small>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <div className="step-btn">
                                    <img className="rounded-icon" alt="1 año" src={etapa1ano}/> 
                                    <small>1 año a más</small>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            
        </React.Fragment>
    )
}

export default ElementPillsSteps;
