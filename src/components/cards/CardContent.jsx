import React from 'react'
import classNames from 'classnames'
import iconShare from './../../assets/img/icons/art_share.svg'
import iconLike from './../../assets/img/icons/art_like.svg'

import imageDemo from './../../assets/img/demo/articles/baby.jpg'


export const CardContent = (props) => {
    return (
        <React.Fragment>
            <div className={classNames('view1', props.overlay ? 'view1_overlay ': null)}>
                <div className="d-flex flex-column">
                    <div className="media">
                        <span className="offerTag xs">-33%</span> 
                        <a className="thumb" href="/">
                            <img alt="" className="d-block w-100" src={imageDemo}/>
                        </a>
                    </div>
                    <div className="item-content d-flex flex-column">
                        <span className="kicker">RECOMENDACIÓN DE COMPRA</span> 
                        <a className="title-product" href="/">Cómo elegir la silla adecuada.</a>
                        <p className="excerpt-view">Sabemos lo difícil que puede ser encontrar la silla adecuada para el bebe. Son muchos tipos, tamaños…</p>
                        <div className="read-more-box d-flex justify-content-between">
                            <div className="product_share_box">
                                <a className="like-btn" href="/">
                                    <img className="Group-6" src={iconLike} alt="like"/>
                                </a> 
                                <a className="share-btn" href="/">
                                    <img alt="share" className="Group-7" src={iconShare}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default CardContent;
