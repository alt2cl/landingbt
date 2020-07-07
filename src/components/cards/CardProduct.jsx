import React, { useState } from 'react';
import IconCard from '../../assets/img/icons/card.svg'
import IconTruck from '../../assets/img/icons/truck.svg'
import IconCockade from '../../assets/img/icons/cockade.svg'


const CardProduct = (props) => {

    //const [oldprice, setOldprice] = useState(0);

    //setOldprice(props.oldprice)

    function numberWithDot(x) {
        //return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
        if(x > 1000){
            return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        } else {
            return x
        }
        
    }

    //console.log('old price: ', numberWithDot(1000))
    return (

        <React.Fragment>
            <div className="view1 d-flex flex-column">
                <div className="media"> 
                    <span className="offerTag xs">-33% {props.offer}</span> 
                    <a href="/" className="thumb">
                        <img src={props.image} alt="" className="h-100"/>
                    </a>
                </div> 
                <div className="item-content d-flex flex-column mt-auto">
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
                    ${numberWithDot(props.oldprice)} 
                    </small> 
                    <div className="price">
                        <span className="cost">
                            $ {numberWithDot(props.price)}
                        </span> 
                        {/* <small className="sale-price">-50%</small> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
       
    )
}

export default CardProduct;
