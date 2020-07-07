import React from 'react'

const ElementFilter =(props)=> {
    return(
    <div className="filter-product-box d-flex justify-content-md-center">

			{
				props.data.map((filter, ii)=>(

					<React.Fragment>

					<div className="filter-item mx-3 d-flex align-items-center justify-content-between dropdown position-relative" key={'filter-'+ii}>
						{
							filter.showLabel ? <label>{filter.label}</label>  : null
						}
						<div className="dropdown">
							<button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{filter.name}
							</button>
							
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								{
									filter.items.map((item,i)=> (
									<a className="dropdown-item" href="/" key={'item-filter-'+(ii+i)}>{item}</a>
									))
								}
								{
									filter.showLink ? 
									<React.Fragment>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item item-more" href={filter.link}>{filter.textLink}</a>
									</React.Fragment>
									:
									null
								}
								
							</div>
						</div>


						<select className="form-control d-flex d-md-none position-absolute">
							{
									filter.items.map((item, i)=> (
									<option className="dropdown-item" href="#" key={'item-filter-option'+ (i+ii+1)}>{item}</option>
									))
							}
							
							<option>Todas las Etapas</option>
							<option>Todas las Etapas</option>
						</select>
					</div>


					


					</React.Fragment>
					
					



					

				))
			}
			

		
	
	</div>
    )
}

export default ElementFilter
