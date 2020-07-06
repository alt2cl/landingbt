import React, { Fragment } from 'react'
import classNames from 'classnames'

const CardBnr = (props) => {
    
    return (
        <Fragment>
            <div className={classNames("view1 hr-item", props.bgColor+'-bg')}>
                <div className="d-flex flex-column">
                    <div className="d-flex ">
                        <a rel="noopener noreferrer" href={props.link} target="_blank" className="thumb">
                            <span className="offerTag xs">-33% </span>
                            <span className="lazyload-wrapper">
                                <img className="d-block w-100" src={props.image} alt={props.title}/>
                            </span>
                        </a>
                        <div className="item-content d-flex flex-column">
                            <span className="kicker">{props.name}</span>
                            <a rel="noopener noreferrer" href={props.link} target="_blank" className="title-product">
                            {props.title}
                            </a>
                            <small className="oldPrice">
                            <span>${props.old_price}</span>
                            </small>
                            <div className="price">
                                <span>
                                    <span>${props.price}</span>
                                </span>
                                
                            </div>
                        </div>
                    </div>
                    { props.offerFlash ?  
                        <div className="counter-bottom d-flex justify-content-between">
                            <span>
                            OFERTA FINALIZA EN:
                            </span>
                            <strong>
                            04:15:30
                            </strong>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default CardBnr;
