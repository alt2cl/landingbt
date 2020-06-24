import React, { Fragment } from 'react'

const CardBnr = (props) => {
    return (
        <Fragment>
            <div className="bt_card-brand">
                <a rel="noopener noreferrer" href={props.link} target="_blank" className="bt_brand-img">
                    <span className="lazyload-wrapper">
                        <img alt="Despacho gratis" src={props.img}/>
                    </span>
                </a>
                <a rel="noopener noreferrer" href={props.link} target="_blank" className="bt_link-btn-bullet d-flex justify-content-between">
                    <span>Despacho gratis</span>
                    <img alt="Despacho gratis" src="/static/media/arrow-right.0ff9c95e.svg"/>
                </a>
            </div>
        </Fragment>
    )
}

export default CardBnr;
