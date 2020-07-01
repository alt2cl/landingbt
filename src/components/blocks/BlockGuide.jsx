import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import WrapperCarousel from './../wrappers/WrapperCarousel'

import ElementHead from './../elements/ElementHead'
import heart from '../../assets/img/icons/heart.png'
import CardContent from './../cards/CardContent'
import CardBnr from './../cards/CardBnr'
import dataGuide from './../../data/guide'



const BlockGuide = (props) => {
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
                            <WrapperCarousel nav={false} showDesktop={4}>
                                {dataGuide.map((props, i) => (
                                    <div className="item" key={i}>
                                        <CardBnr  {...props}/>
                                    </div>
                                ))}
                            </WrapperCarousel>

                            {/* <div className="article-guia-padres lay_blog d-flex flex-column flex-md-row " >
                                <CardContent overlay/>
                                <div className="mini-articles-guia-padres d-flex justify-content-between">
                                    <CardContent/>
                                    <CardContent/>
                                </div>
                            </div> */}

                        </div>
                    </div>
                    
                </div>
            </WrapperBlock>
            
        </React.Fragment>
    )
}

export default BlockGuide;
