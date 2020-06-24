import React from 'react';

export default function ElementInputSearch(props) {
  return (
      <React.Fragment>

            <div className="search-product">

                <div className="search-box-intro d-flex justify-content-between align-items-center">

                    <form className="form-inline d-flex flex-nowrap w-100">
                        <input className="form-control" type="search" placeholder="Buscar + 35.000 productos..." aria-label="Buscar"/>
                        <button className="search-btn btn btn-primary" type="submit">Buscar</button>
                    </form>

                </div>
                <div className="resultados">
                    <div className="list-result">
                        <h5 className="title-section-search pink-text">CATEGORÍA</h5>
                        <ul className="resultados-list">
                            <li>
                            <a href="/">
                                <h3 className="title">Silla para Auto Infanti: Elite SPS</h3>
                            </a>
                        
                            </li>
                            <li>
                            <a href="/">
                                <h3 className="title">Silla para Auto Infanti: Elite SPS</h3>
                            </a>
                            
                            </li>
                        </ul>
                    </div>
                    <div className="list-result">
                        <h5 className="title-section-search green-text">MARCA</h5>
                        <ul className="resultados-list">
                            <li>
                            <a href="/">
                                <h3 className="title">Silla para Auto Infanti: Elite SPS</h3>
                            </a>
                        
                            </li>
                            <li>
                            <a href="/">
                                <h3 className="title">Silla para Auto Infanti: Elite SPS</h3>
                            </a>
                            
                            </li>
                        </ul>
                    </div>
                    <div className="list-result">
                        <h5 className="title-section-search purple-text">PRODUCTOS</h5>
                        <ul className="resultados-list">
                            <li>
                            <a href="/">
                                <h3 className="title">Silla para Auto Infanti: Elite SPS</h3>
                            </a>
                        
                            </li>
                            <li>
                            <a href="/">
                                <h3 className="title">Silla para Auto Infanti: Elite SPS</h3>
                            </a>
                            
                            </li>
                        </ul>
                    </div>
                
                </div>

            </div>
      </React.Fragment>
  
  );
}
