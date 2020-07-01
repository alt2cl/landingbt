import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'

import ElementHead from './../elements/ElementHead'
import WrapperCarousel from './../wrappers/WrapperCarousel'
import CardPillProduct from './../cards/CardPillProduct'


const BlockBabyPacks = (props) => {
    const offerFlash = props.offerFlash
    const bgColor = props.bgColor
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
                            <WrapperCarousel nav={true} showDesktop={3} id="owl-sale">
                                {props.data.map((props, i) => (
                                    <div className="item" key={i}>
                                        <CardPillProduct {...props} offerFlash={offerFlash} bgColor={bgColor}/>
                                    </div>
                                ))}
                            </WrapperCarousel>
                        </div>
                    </div>
                </div>
            </WrapperBlock>
            
        </React.Fragment>

    )
}

export default BlockBabyPacks;
