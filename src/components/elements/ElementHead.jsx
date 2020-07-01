import React from 'react';

export default function componentName(props) {
  return (
      <React.Fragment>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    {props.img ? 
                    <img className="icono head-icon" src={props.img} alt="" />
                    : null}
                    
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                </div>
            
      </React.Fragment>
  
  );
}
