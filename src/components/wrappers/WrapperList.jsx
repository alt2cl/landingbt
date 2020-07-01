import React from 'react'
import CardProduct from '../cards/CardProduct'

const WrapperList = (props) => {
    return (
        <React.Fragment>
            <div className="list-product-box list-product-end-article">
                <ul className="list-product d-flex">
                {props.productos.map((item, index) => (
                    <li key="index">
                        <CardProduct {...item} />

                    </li>
                ))}

                    <li className="d-flex justify-content-center align-items-center">
                        <a rel="noopener noreferrer" href="https://www.babytuto.com/e/coches?ref=landing-cyber" target="_blank" className="go-btn d-flex flex-column justify-content-center align-items-center">
                            <div className="arrow next"><i></i></div>
                            <span className="title-btn-arrow">Ver todo en Destacados</span>
                        </a>
                    </li>
                        
                </ul>
            </div>
        </React.Fragment>
    )
}

export default WrapperList;
