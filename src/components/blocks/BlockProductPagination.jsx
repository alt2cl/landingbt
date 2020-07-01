import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import WrapperList from './../wrappers/WrapperList'

import ElementHead from './../elements/ElementHead'
import heart from '../../assets/img/icons/heart.png'
import data from '../../data/products'
import ElementPaginator from './../elements/ElementPaginator'


const BlockProductPagination = (props) => {
    const productos = data[0].subcategories[0].products 
    return (
        <React.Fragment>
            <WrapperBlock>
                <div className="section">
                    <div className="component">
                        <div className="component-head">
                            <ElementHead   
                                title="Todos nuestros productos en oferta" 
                                body="" 
                            />
                        </div>
                        <div className="component-body">

                            <WrapperList productos={productos} ></WrapperList>
                            <ElementPaginator />

                        </div>
                    </div>
                    
                </div>
            </WrapperBlock>
            
        </React.Fragment>
    )
}

export default BlockProductPagination;
