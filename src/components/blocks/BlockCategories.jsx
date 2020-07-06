import React from 'react'
import WrapperBlock from './../wrappers/WrapperBlock'
import WrapperCarousel from './../wrappers/WrapperCarousel'
import WrapperTabs from './../wrappers/WrapperTabs'
import WrapperList from './../wrappers/WrapperList'
import CardBnr from './../cards/CardBnr'
import classNames from 'classnames'



import ElementHeadSection from './../elements/ElementHeadSection'
import data from '../../data/products'


const BlockCategories = (props) => {
    let blockNumber = props.blockNumber;
    
    const productos = data[blockNumber].subcategories[0].products 
    const dataSection = data[blockNumber]
    const dataSubcategories = data[blockNumber].subcategories
    const dataColor = data[blockNumber].color

    
    return (
        <React.Fragment>
            <WrapperBlock>
                <div className="section">
                    <div className={classNames("component", dataColor+"-component" )}>
                        <div className="component-head">
                            <ElementHeadSection   
                                img={dataSection.icon}
                                title={dataSection.title} 
                                body={dataSection.subtitle}
                                btnText="Ver más"
                                btnLink={dataSection.link}
                            />
                        </div>
                        <div className="component-body">
                            <div className="section">
                                <WrapperCarousel nav={false} showDesktop={props.showBnr}>
                                    {dataSection.banners.map((props, i) => (
                                        <div className="item" key={'card-bnr-'+i}>
                                            <CardBnr  {...props}/>
                                        </div>
                                    ))}
                                </WrapperCarousel>
                            </div>
                            <div className="section">
                                <WrapperTabs tabsIds={dataSubcategories}>
                                    {dataSubcategories.map((item, index) => (
                                        <div key={'k-'+index}>
                                        <WrapperList productos={item.products} i={'in-'+index} ></WrapperList>

                                        </div>


                                    ))}
                                </WrapperTabs>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </WrapperBlock>
            
        </React.Fragment>
    )
}

export default BlockCategories;
