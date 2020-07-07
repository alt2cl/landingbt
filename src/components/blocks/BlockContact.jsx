import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'

import ElementNewsletter from './../elements/ElementNewsletter'
import ElementContact from './../elements/ElementContact'

const BlockContact = () => {
    return (
        <WrapperBlock>
                <div className="section">
                <div className="d-flex flex-column flex-lg-row justify-content-center ">
                    <ElementNewsletter />
                    <ElementContact />
                </div>

                </div>
        </WrapperBlock>
        
    )
}

export default BlockContact
