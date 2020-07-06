import React from 'react'
//import classNames from 'classNamenames'

const ElementButtonGroup = (props) => {
    return(
        <React.Fragment>
            <div className="pills-etapas-filter d-flex justify-content-center">
                <div className="btn-group-wrap ">
                    <div role="group" className=" btn-group w-100">
                        <a href="/" className="btn btn-outline-secondary active">
                            SOY MAMÁ
                        </a> 
                        <a href="/" className="btn btn-outline-secondary ">
                            SOY PAPÁ
                        </a> 
                        <a href="/" className="btn btn-outline-secondary ">
                            SOY ABUELO O ABUELA
                        </a> 
                        <a href="/" className="btn btn-outline-secondary ">
                            ESTOY ESPERANDO QUEDAR EMBARAZADA
                        </a> 
                        <a href="/" className="btn btn-outline-secondary ">
                            OTRO
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ElementButtonGroup