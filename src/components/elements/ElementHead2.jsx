import React from 'react';

export default function componentName(props) {
  return (
      <React.Fragment>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    {props.img ? 
                    <img className="icono head-icon" src={props.img} alt="" style={{maxHeight: '37px'}} />
                    : null}
                    <p className="mt-2">{props.body}</p>
                    <h3>{props.title}</h3>
                    
                </div>
            
      </React.Fragment>
  
  );
}
