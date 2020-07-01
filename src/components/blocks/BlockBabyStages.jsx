import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'

import ElementHead from './../elements/ElementHead'
import heart from '../../assets/img/icons/heart.png'
import ElementPillsSteps from './../elements/ElementPillsSteps'


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
                            
                            <ElementPillsSteps />

                        </div>
                    </div>
                    
                </div>
            </WrapperBlock>
            
        </React.Fragment>
    )
}

export default BlockBabyStages;
