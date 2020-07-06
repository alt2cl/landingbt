import React from 'react';

export default function ElementHeadSection(props) {
  return (
      <React.Fragment>
        <div className="head-section-call d-flex align-items-center">
            <img className="icon-head" src={props.img} alt="crib"/>
            <h5 className="title-head text-left">
            <span>{props.title}</span>
            <small>{props.body}</small>
            </h5>
            <a className="btn btn-primary btn-lg ml-auto pink-btn" href={props.btnLink}>{props.btnText}</a>
        </div>
      </React.Fragment>
  
  );
}
