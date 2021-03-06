import React from 'react'
import classNames from 'classnames'


const ElementPills = (props) => {
    
    let datos = props.data;
    let ancho = props.maxwidth + 'px'

    return (
        <React.Fragment>
            <div className="list-pills-box" style={{maxWidth: ancho, margin:'auto'}}>
                <div className="hs-xs">
                    <ul className="nav nav-pills bt_pills justify-content-center flex-wrap">
                    {datos.map((item, i) => (
                        <li className="nav-item" key={'pill-list-'+ i}>
                            <a className={classNames('nav-link', item.color+'Btn')} href={item.link}>
                                <img alt="Coches" className="bt-icon" src={item.image}/>
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                        
                    </ul>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default ElementPills;
