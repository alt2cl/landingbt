import React from 'react'
import ArrowNext from './../../assets/img/icons/arrow_next.svg'
import ArrowInactive from './../../assets/img/icons/arrow_following_inactive.svg'

const ElementPaginator = () => {
    return (
        <React.Fragment>
            <div className="loader-pagination-box">
		<div className="d-flex justify-content-center">
			<div className="bt_loading">
				<div className="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div><span>Cargando más productos</span>
			</div>
		</div>
		<div className="bt_paginatiion d-flex justify-content-end">
			<ul className="list_pagination d-flex">
				<li>
					<a className="pagination-item active" href="/">1</a>
				</li>
				<li>
					<a className="pagination-item" href="/">2</a>
				</li>
				<li>
					<a className="pagination-item" href="/">3</a>
				</li>
			</ul>
			<div className="controls-btns">
				<a className="sig" href="/"><img alt="arrow" src={ArrowNext}/></a> 
                <a className="sigs" href="/"><img alt="arrow inactive" src={ArrowInactive}/></a>
			</div>
		</div>
	</div>
            
        </React.Fragment>
    )
}

export default ElementPaginator;
