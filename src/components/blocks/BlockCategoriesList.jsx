import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'

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
                            <ElementPills data={data} />
                        </div>
                    </div>
                    
                </div>
            </WrapperBlock>
            
        </React.Fragment>
    )
}

export default BlockCategoriesList;
