import React, { Fragment } from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import ElementHead from './../elements/ElementHead'
import ElementInputSearch from './../elements/ElementInputSearch'


const BlockSearch = (props) => {
    return (
        <Fragment>
            <WrapperBlock>
                <div className="section">
                    <ElementHead   
                        img="https://s3.babytuto.com/565e454ba662a1a8794491dd3a4c942d.png" 
                        title="¡Despierta! Es CyberMonday en Babytuto" 
                        body="No te pierdas estas ofertas increíbles que tenemos para ti y tu bebé, con más de 35.000 productos y 400 marcas exclusivas." 
                    />
                    <ElementInputSearch />
                    
                </div>
            </WrapperBlock>
            
        </Fragment>
        
    )
}

export default BlockSearch;
