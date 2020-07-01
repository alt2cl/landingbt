import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import data from '../../data/brands';


const BlockSearch = (props) => {
    return (
        <React.Fragment>
            <WrapperBlock>
                <div className="section">
                    <div className="component">
                        <div className="component-body">
                            <div className="list-brand d-flex flex-column justify-content-center component">
                                <ul className="d-flex justify-content-center flex-wrap">
                                    

                                    {data.map((props, i) => (

                                        <li key={i}>
                                            <a rel="noopener noreferrer" href={props.link} target="_blank">
                                                <span class="lazyload-wrapper">
                                                    <img class="logo mini-logo" src={props.image} alt={props.name}/>
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    </div>

                </div>
            </WrapperBlock>
            

        </React.Fragment>
    )
}

export default BlockSearch;
