import React from 'react'
import IconCard from '../../assets/img/icons/card.svg'
import IconTruck from '../../assets/img/icons/truck.svg'
import IconCockade from '../../assets/img/icons/cockade.svg'


const CardProduct = (props) => {
    //console.log('contenido card: ',props)
    return (

        <React.Fragment>
            <div className="view1 hr-item d-flex flex-column">
                <div className="media"> 
                    <span className="offerTag xs">-33% {props.offer}</span> 
                    <a href="/" className="thumb">
                        <img src={props.image} alt="" className="d-block w-100"/>
                    </a>
                </div> 
                <div className="item-content d-flex flex-column">
                    <span className="kicker">
                        {props.name}
                    </span> 
                    <a href="/" className="title-product">
                        {props.title}
                    </a> 
                    <div className="featuresProduct d-flex">
                        <span className="featureIcon">
                            <img src={IconCard} alt="Cuidado medio ambiente"/>
                        </span> 
                        <span className="featureIcon">
                            <img src={IconTruck} alt="Envio"/>
                        </span> 
                        <span className="featureIcon">
                            <img src={IconCockade} alt="Destacado"/>
                        </span>
                    </div> 
                    <small className="oldPrice">
                    ${props.old_price}
                    </small> 
                    <div className="price">
                        <span className="cost">
                            ${props.price}
                        </span> 
                        <small className="sale-price">-50%</small>
                    </div>
                </div>
            </div>
        </React.Fragment>
       
    )
}

export default CardProduct;
