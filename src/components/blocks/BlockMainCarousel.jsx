import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import WrapperCarousel from './../wrappers/WrapperCarousel'
import CardBnr from './../cards/CardBnr'
import data from '../../data/carousel';
import dataBrand from '../../data/brands';




const BlockMainCarousel = (props) => {

   
    return (
        <React.Fragment>
            <WrapperBlock>
                <div className="section">
                    <div className="component">
                        
                        <div className="component-body">
                            <WrapperCarousel nav={true} showDesktop={2}>
                                {data.map((props, i) => (
                                    <div className="item" key={i}>
                                        <CardBnr  {...props}/>
                                    </div>
                                ))}
                            </WrapperCarousel>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="component">
                        <div className="component-body">
                            <div className="list-brand d-flex flex-column justify-content-center">
                                <ul className="d-flex justify-content-center flex-wrap">
                                    {dataBrand.map((props, i) => (
                                        <li key={i}>
                                            <a rel="noopener noreferrer" href={props.link} target="_blank">
                                                <span className="lazyload-wrapper">
                                                    <img className="logo mini-logo" src={props.image} alt={props.name}/>
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </WrapperBlock>
        </React.Fragment>
    )
}

export default BlockMainCarousel;
