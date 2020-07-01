import React from 'react';

export default function ElementHeadSection(props) {
  return (
      <React.Fragment>
        <div className="head-section-call d-flex align-items-center">
            <img className="icon-head" src={props.img} alt="crib"/>
            {/* <div class="bt_intro-box_head d-flex justify-content-center mb-4 mt-0"><a class="logo-brand-1" href="/"><img alt="Babytuto" src="/static/media/565-e-454-ba-662-a-1-a-8794491-dd-3-a-4-c-942-d@3x.be7af557.png"></a><a class="logo-brand-2" href="/"><img alt="Babytuto" src="/static/media/cibermonday.f0f67747.svg"></a></div> */}
            <h5 className="title-head text-left">
            <span>{props.title}</span>
            <small>{props.body}</small>
            </h5>
            <a className="btn btn-primary btn-lg ml-auto pink-btn" href={props.btnLink}>{props.btnText}</a>
        </div>
      </React.Fragment>
  
  );
}
