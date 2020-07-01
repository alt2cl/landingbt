import React, { Fragment } from 'react'
import iconArrow from './../../assets/img/icons/arrow-right.svg'

const CardBnr = (props) => {
    return (
        <Fragment>
            <div className="bt_card-brand">
                <a rel="noopener noreferrer" href={props.link} target="_blank" className="bt_brand-img">
                    <span className="lazyload-wrapper">
                        <img alt="Despacho gratis" src={props.image}/>
                    </span>
                </a>
                <a rel="noopener noreferrer" href={props.link} target="_blank" className="bt_link-btn-bullet d-flex justify-content-between">
                    <span>Despacho gratis</span>
                    <img alt="Despacho gratis" src={iconArrow}/>
                </a>
            </div>
        </Fragment>
    )
}

export default CardBnr;
