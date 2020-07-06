import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import ElementHead from './../elements/ElementHead'
import InputNewsletter from './../elements/ElementInputNewsletter'


const BlockNewsletter = (props) => {
    return (
        <div>
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

                            <InputNewsletter />

                        </div>
                    </div>
                </div>
            </WrapperBlock>
        </div>
    )
}



export default BlockNewsletter 
