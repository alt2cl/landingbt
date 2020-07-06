import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import WrapperCarousel from './../wrappers/WrapperCarousel'
import CardBnr from './../cards/CardBnr'
import dataCarousel from './../../data/carousel'



import ElementHead from './../elements/ElementHead'
import ElementPills from './../elements/ElementPills'
import data from '../../data/pills'



const BlockCategoriesList = (props) => {
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
                            <WrapperCarousel nav={true} showDesktop={4}>
                                {dataCarousel.map((props, i) => (
                                    <div className="item" key={i}>
                                        <CardBnr  {...props}/>
                                    </div>
                                ))}
                            </WrapperCarousel>
                            <ElementPills data={data} maxwidth={650} />
                        </div>
                    </div>
                    
                </div>
            </WrapperBlock>
            
        </React.Fragment>
    )
}

export default BlockCategoriesList;
