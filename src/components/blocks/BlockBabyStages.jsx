import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'

import ElementHead from './../elements/ElementHead'
// import ElementButtonGroup from './../elements/ElementButtonGroup'
import WrapperTabsStages from '../wrappers/WrapperTabsStages'
import dataTabsStages from './../../data/baby-stages'
import classNames from 'classnames';
import CardProduct from './../cards/CardProduct'
import thumbDemo from './../../assets/images-compressed/0ea8e6ce818d926faacef80a708a760a.jpg'







const BlockBabyStages = (props) => {
   
    return (
        <React.Fragment>
            <WrapperBlock>
                <div className="section">
                    <div className="component">
                        <div className="component-head">
                            <ElementHead   
                                img={props.iconHead} 
                                title={props.titleHead} 
                                body={props.bodyHead} 
                            />
                        </div>
                        <div className="component-body">
                            {/* <ElementButtonGroup /> */}

                           
                           
                            <WrapperTabsStages dataTabsSatges={dataTabsStages}>
                                {dataTabsStages.map((item, index) => (
                                    <div className="container">
                                        <div className="row" key="index">
                                            <div className="col-12 col-lg-5">

                                                <div className="introEtapaBox d-flex flex-column">
                                                    <div>
                                                        <img src={item.icono} className="mb-3" alt={item.name} style={{width: "40px"}}/> 
                                                        <h4 className="mb-3">{item.name}</h4> 
                                                        <p className="mb-3">{item.descripcion}</p>
                                                    </div>
                                                    <div className="mt-auto">
                                                        <button type="submit" className="btn btn-primary btn-lg purple-btn mb-3">Ver Guía Completa</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-12 col-lg-7">
                                                <div className="list-product-box list-product-end-article">
                                                <ul className="list-product d-flex stage-list-product">
                                                    <li>
                                                        <CardProduct image={thumbDemo} title="Set de Ropa Completo Azul Baby Mink" name="BABY MIBK" price="13.990"/>
                                                    </li>
                                                    <li>
                                                        <CardProduct image={thumbDemo} title="Set de Ropa Completo Azul Baby Mink" name="BABY MIBK" price="13.990"/>
                                                    </li>
                                                    <li>
                                                        <CardProduct image={thumbDemo} title="Set de Ropa Completo Azul Baby Mink" name="BABY MIBK" price="13.990"/>
                                                    </li>
                                                </ul>

                                                </div>
                                                

                                            </div>

                                        </div>

                                    </div>

                                        
                                    
                                    
                                    
                                ))}
                                
                            </WrapperTabsStages>

                        </div>
                    </div>
                    
                </div>
            </WrapperBlock>
            
        </React.Fragment>
    )
}

export default BlockBabyStages;
