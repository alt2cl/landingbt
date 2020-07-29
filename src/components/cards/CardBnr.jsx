import React, { Fragment } from 'react'
import iconArrow from './../../assets/img/icons/arrow-right.svg'

import bnr from './../../assets/img/demo/destacados/bg_2020-07-03/bg.jpg'
import bnrx2 from './../../assets/img/demo/destacados/bg_2020-07-03/bg@2x.jpg'
import bnrx3 from './../../assets/img/demo/destacados/bg_2020-07-03/bg@3x.jpg'

const CardBnr = (props) => {
    let img = props.image;
    let extension = img.substr(-4);
    let arrtext= img.split(".");
    let img2x = arrtext[0]+ '@2x' + extension;
    //let img3x = arrtext[0]+ '@3x' + extension;
    return (
        <Fragment>
            <div className="bt_card-brand">
                <a rel="noopener noreferrer" href={props.link} target="_blank" className="bt_brand-img">
                    <span className="lazyload-wrapper">
                        <picture>
                            <source srcset={ img2x } media="(max-width: 768px)"/>
                            <source srcset={ img } />
                            <img src={ img } alt={props.name}/>
                        </picture>
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
