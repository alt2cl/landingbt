import React from 'react';

export default function WrapperBlock({children}) {
  return (
      <React.Fragment>

        <div className='wrap-block'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {children}
                    </div>
                </div>
            </div>
        </div>

      </React.Fragment>


  );
}


