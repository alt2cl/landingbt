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
                            <div className="section">
                                <WrapperCarousel nav={true} showDesktop={1}>
                                    {data.map((props, i) => (
                                        <div className="item" key={i}>
                                            <CardBnr  {...props}/>
                                        </div>
                                    ))}
                                </WrapperCarousel>
                            </div>
                            <div className="section">
                                <WrapperCarousel nav={false} showDesktop={4} showMobile={2}>
                                    {data.map((props, i) => (
                                        <div className="item" key={i}>
                                            <CardBnr  {...props}/>
                                        </div>
                                    ))}
                                </WrapperCarousel>
                            </div>
                            <div className="section">
                                <div className="list-brand d-flex flex-column justify-content-center" style={{maxWidth: '1000px', margin: 'auto'}}>
                                    <div className="d-flex justify-content-center flex-wrap"  >
                                    <WrapperCarousel nav={true} showDesktop={9} showMobile={5}>
                                        {dataBrand.map((props, i) => (
                                            <div className="item" key={i}>
                                                <a rel="noopener noreferrer" href={props.link} target="_blank">
                                                    <span className="lazyload-wrapper">
                                                        <img className="logo mini-logo" src={props.image} alt={props.name}/>
                                                    </span>
                                                </a>
                                            </div>
                                        ))}
                                    </WrapperCarousel>
                                        
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </WrapperBlock>
        </React.Fragment>
    )
}

export default BlockMainCarousel;
