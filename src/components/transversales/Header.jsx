//imr: import react
//imruu: import react and use state and use effect
import React from 'react';
import iconArrowDown from './../../assets/img/icons/arrow-down.svg'
import iconArrowUp from './../../assets/img/icons/arrow_up.svg'
import iconNavSearch from './../../assets/img/icons/nav_search.svg'
import iconClosed from './../../assets/img/icons/closed.svg'
import iconBlog from './../../assets/img/icons/blog.svg'
import iconTruckBlack from './../../assets/img/icons/truck_black.svg'
import iconCart from './../../assets/img/icons/cart.svg'
import iconMenu from './../../assets/img/icons/menu.svg'
import iconGirl from './../../assets/img/icons/girl.svg'
import iconBtLogo from './../../assets/img/logos/bt_logo.svg'



// /img/icons/arrow_down.svg


//rfc: crete functional componente
//rafc: crete functional component con arrow function
export default function Header() {
  return (
    
    <React.Fragment>
              <nav className="main-nav navbar py-0  navbar-light pr-0 pl-0">
                  <div className="d-flex" >
                      {/* <a href="/" className="navbar-toggler" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                          <img src={iconMenu} alt="menu" className="menu"/>
                      </a>  */}
                      {/* <!-- Clase "navbar-brand-half" se agrega o quita para motrar logo entero o solo ideologo --> */}
                      <a className="navbar-brand ml-3 " href="/home">
                          <img alt="" src={iconBtLogo} />
                      </a>
                  </div>

<div className="d-flex options-menu">
    {/* <div className="option-item d-md-none">
        <div className="resume-title pl-2">
            <p className="mini-title-product">Silla para Auto Infanti: Elite SPS hsdjfd fsbfjdf f dfjbfdd para Auto Infanti: Elite SPS hsdjfd fsbfjdf f dfjbfdd f …</p>
            <span className="cost">$169.990</span>
            <small className="oldPrice">249.000</small>
        </div>
    </div> */}
    <div className="option-item autoajust ">
        {/* <!-- Agregar clase "active" cuando den click a la lupa --> */}
        <div id="search-header" className="search-header mobile-search-off ">
            <form className="form-inline  my-lg-0">
                <a href="/" id="searchSubmit" className="btn btn-link  my-sm-0 search-btn-icon ml-auto" >
                  <img src={iconNavSearch} alt="buscar" className="magnifier"/>
                </a>
                <input id="serch-input" className="form-control" type="text" placeholder="Busca más de 35.000 productos para tu bebe…"/>
                <a href="/" id="js-closed" className="btn btn-link  my-sm-0 closed-btn "  style={{display:'none'}}>
                  <img src={iconClosed} alt="closed" className="magnifier"/>
                </a>
            </form>
        </div>
    </div>
    {/* <div className="option-item d-none d-lg-flex">
        <a href="/" className="btn btn-link right-options " type="submit">
          <img src={iconBlog} alt="blog" className="cart"/>
          <span className="d-none d-xl-inline-block">Ir al Blog</span>
        </a>
    </div> */}

    <div className="option-item d-none d-lg-flex">
    {/* <a href="/perfil" className="['btn', 'btn-link', 'right-options', activo === 'perfil' ? 'active': 'inactive' ]" type="submit"> */}

        <a href="/perfil" className={"btn btn-link right-options"} type="submit">
          <img src={iconTruckBlack} alt="carro" className="cart"/>
          <span className="d-none d-xl-inline-block">Estado de entrega</span>
        </a>
    </div>

    {/* <div className="option-item ">

        <a href="/checkout" className={'btn btn-link right-options'} type="submit">
          <img src={iconCart} alt="carro" className="cart"/>
          <span className="d-none d-xl-inline-block">Carros de Compras</span>
          <div className="items-card d-flex flex-column d-sm-none">
            <small> 1 Item</small>
            <span className="cost">$169.990</span>
          </div>
        </a>
    </div> */}

    {/* <div className="option-item d-none d-lg-flex">
        <a href="/" className="btn btn-link right-options "  data-toggle="modal" data-target="#staticBackdrop2">
          <img src={iconGirl} alt="user" className="cart"/>
          <span className="d-none d-xl-inline-block" >Iniciar Sesión</span>
        </a>
    </div> */}
    {/* <div className="option-item d-none d-lg-flex">
        <a href="/" className="btn btn-link right-options " data-toggle="modal" data-target="#staticBackdrop">
          <span className="d-none d-xl-inline-block">Registrarme</span>
        </a>
    </div> */}

    <div className="option-item d-none d-lg-flex">
      <a className="btn btn-link right-options " data-toggle="collapse" href="#drop-user"  aria-expanded="false" aria-controls="drop-user">
        <img src={iconGirl} alt="user" className="cart"/>
        <div className="title-loged d-none d-xl-inline-block">
          <h6>Dani Lorca</h6>
          <small>dani@babytuto.com</small>
        </div>
        <div className="d-flex flex-column pl-2">
          <img className="arrow-icon arrow-down" alt="down" src={iconArrowDown}/>
          <img className="arrow-icon arrow-up" alt="up" src={iconArrowUp}/>
        </div>
      </a>

      <div id="drop-user" className="drop-user pl-3 py-2 pr-2 collapse">
        <ul className="list-options-menu">
          <li className="bb-1">
              <div className="d-flex item-menu">
                  <div className="d-flex">
                    <a href="/perfil">Baby shower</a>
                  </div>
                  <div className="d-flex ml-auto">
                    <a href="/" className="budget"><span>18</span></a>
                  </div>
                </div>
          </li>
          <li className="bb-1">
              <div className="d-flex item-menu">
                  <div className="d-flex">
                    <a href="/perfil">Ajustes de Cuenta</a>
                  </div>
                  
                </div>
          </li>
          <li className="bb-1">
              <div className="d-flex item-menu">
                  <div className="d-flex">
                    <a href="pedidoslink">Mis Pedidos</a>
                  </div>
                  <div className="d-flex ml-auto">
                    <a href="/" className="budget"><span>2</span></a>

                  </div>
                </div>
          </li>
          <li className="bb-1">
              <div className="d-flex item-menu">
                  <div className="d-flex">
                    <a href="/perfil">Admin Babytuto</a>
                  </div>
                  <div className="d-flex ml-auto">
     
                  </div>
                </div>
          </li>
          <li >
              <div className="d-flex item-menu">
                  <div className="d-flex">
                    <a href="/perfil">Cerrar Sesión</a>
                  </div>
                </div>
          </li>
        </ul>
      </div>
  </div>

    
</div>

    
</nav>
    </React.Fragment>
  );
}


