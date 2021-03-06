import React, { Fragment } from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import ElementHead from './../elements/ElementHead2'
import ElementInputSearch from './../elements/ElementInputSearch'
import ElementFilter from './../elements/ElementFilter'
import dataFilter from './../../data/search-filter'



const BlockSearch = (props) => {
    return (
        <Fragment>
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
                            <div className="d-flex justify-content-center">
                                <ElementInputSearch />
                            </div>


                            <ElementFilter data={dataFilter}/>
                           

                            


                        </div>
                    </div>
                </div>
            </WrapperBlock>
            
        </Fragment>
        
    )
}



export default BlockSearch;
