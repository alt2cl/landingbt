import React from 'react';
import classNames from 'classnames';



const WrapperTabs = (props) => {

    console.log('wrapper tab: ', props)

    //const nhijos = React.Children.count(props.children)
    const arreglohijos = React.Children.toArray(props.children)

    return (

        <React.Fragment>
        <div className="tabs-higtlight-box">
            <div className="tab-head hs-xs">
                <ul className="nav nav-pills mb-3 flex-nowrap" id="pills-tab" role="tablist">
                    {props.tabsIds.map((item, i) => (
                        
                        <li className="nav-item" key={i}>
                            <a className={classNames('nav-link', i === 0 ? 'active' : null)} id={'pill-'+ item.id} data-toggle="pill" href={'#id'+ item.id} role="tab" aria-controls={'#id'+item.id} aria-selected="true">
                                { item.title }
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    {props.tabsIds.map((item, index) => (
                        <div  className={classNames('tab-pane', 'fade', index === 0 ? 'show active': null)} aria-labelledby={'pill-'+item.id} role="tabpanel" id={'id'+item.id} key={index}>
                        
                            {arreglohijos[index]}
                        
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    </React.Fragment>
    )

}

export default WrapperTabs;

