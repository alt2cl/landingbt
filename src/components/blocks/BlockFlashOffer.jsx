import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'

import ElementHead from './../elements/ElementHead'
import iconhead from '../../assets/img/icons/clock-purple.svg'


const BlockFlashOffer = (props) => {
    return (
        <React.Fragment>
            <WrapperBlock>
                <div className="section">
                    <div className="component">
                        <div className="component-head">
                            <ElementHead   
                                img={iconhead} 
                                title="¡Ofertas Flash!" 
                                body="No te pierdas estas ofertas por un tiempo limitado" 
                            />
                        </div>
                        <div className="component-body">

                        </div>
                    </div>
                </div>
            </WrapperBlock>
            
        </React.Fragment>
    )
}

export default BlockFlashOffer;
