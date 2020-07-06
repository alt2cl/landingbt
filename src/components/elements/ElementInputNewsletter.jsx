import React from 'react'

const ElementInputNewsletter = () => {
    return (
		<div className="container">
			<div className="row flex-column flex-md-row justify-content-center">
		<div className="mr-1">
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">NOMBRE Y APELLIDO</label> 
                <input className="form-control" id="exampleInputPassword1" placeholder="Nombre Completo" type="text"/>
			</div>
		</div>
		<div className="mx-2">
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">EMAIL</label> 
                <input className="form-control" id="exampleInputPassword1" placeholder="Tu email..." type="mail"/>
			</div>
		</div>
		<div className="ml-1">
			<div className="form-group d-flex">
                <div className="w-100">
                <label htmlFor="exampleInputPassword1">SOY</label>
                    <div className="dropdown">
							<button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							La Mamá
							</button>
							
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <a className="dropdown-item" href="#">El Papá</a>
                                <a className="dropdown-item" href="#">La Abuela</a>
                                <a className="dropdown-item" href="#">La Abuelo</a>
                                <a className="dropdown-item" href="#">La Tia</a>
                                <a className="dropdown-item" href="#">El Tio</a>
							</div>
					</div>

                </div>
				    
				{/* <div className="d-flex">
					<select className="form-control">
						<option>
							La Mamá
						</option>
						<option>
							El Papá
						</option>
						<option>
							La Abuela
						</option>
						<option>
							El Abuelo
						</option>
					</select> 
                    <button className="btn btn-primary btn-lg purple-btn float-right ml-2" type="submit">Suscribir</button>
				</div> */}
                <div className="d-flex align-items-end">
                    <button className="btn btn-primary btn-lg purple-btn float-right ml-2 " type="submit">Suscribir</button>

                </div>

			</div>
		</div>
	</div>

		</div>
        
    )
}

export default ElementInputNewsletter
