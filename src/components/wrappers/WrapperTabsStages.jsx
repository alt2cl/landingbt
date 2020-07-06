import React from 'react';
import classNames from 'classnames';
import ElementFilter from './../elements/ElementFilter'
import dataFilter from './../../data/birth-filter'



const WrapperTabsStages = (props) => {

    console.log('wrapper stage tab: ', props)

    //const nhijos = React.Children.count(props.children)
    const arreglohijos = React.Children.toArray(props.children)

    return (

        <React.Fragment>
        <div className="tabs-higtlight-box">
            <div className="tab-head hs-xs">

                <div className="list-pills-box mb-3">
                    <ul className="nav nav-pills bt_pills justify-content-center flex-wrap" id="pills-tab" role="tablist">
                        {
                            props.dataTabsSatges.map((item, i) =>(
                                <li className="nav-item" key={item.id}>
                                    <a className={classNames('nav-link', i === 0 ? 'active' : null)} id={'pill-'+ item.id} data-toggle="pill" href={'#id'+ item.id} role="tab" aria-controls={'#id'+item.id} aria-selected="true">
                                        <div className="step-btn">
                                            <img className="rounded-icon" alt="embarazo" src={item.image}/> 
                                            <small>{item.name}</small>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* <div className="filter-box d-flex flex-column align-items-center pt-2 pb-4 mb-3 ">
                    <label>FECHA DE NACIMIENTO</label>
                    <ElementFilter data={dataFilter} />
                    <small>Quiero agregar a otro integrante hijo</small>
                </div> */}

                <div className="tab-content" id="pills-tabContent">
                    {props.dataTabsSatges.map((item, index) => (
                        <div  className={classNames('tab-pane', 'fade', index === 0 ? 'show active': null)} aria-labelledby={'pill-'+item.id} role="tabpanel" id={'id'+item.id} key={'tab'+item.id}>
                        
                            {arreglohijos[index]}
                        
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    </React.Fragment>
    )

}

export default WrapperTabsStages;

