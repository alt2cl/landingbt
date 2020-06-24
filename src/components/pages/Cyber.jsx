import React from 'react';
import BlockSearch from './../blocks/BlockSearch'
import BlockMainCarousel from './../blocks/BlockMainCarousel'
import BlockBrandList from './../blocks/BlockBrandList'
import BlockBabyPacks from './../blocks/BlockBabyPacks'
import BlockFlashOffer from './../blocks/BlockFlashOffer'
import BlockBabyStages from './../blocks/BlockBabyStages'
import BlockCategoriesList from './../blocks/BlockCategoriesList'
import BlockCategories from './../blocks/BlockCategories'
import BlockGuide from './../blocks/BlockGuide'
import BlockProductPagination from './../blocks/BlockProductPagination'

const Cyber = ({name}) => {
    return (
        <React.Fragment>
            <h1>
                Cyber {name}
            </h1>
            <BlockSearch name="BlockSearch"/>            
            <BlockMainCarousel />
            <BlockBrandList />
            <BlockBabyPacks />
            <BlockFlashOffer />
            <BlockBabyStages />
            <BlockCategoriesList />
            <BlockCategories />
            <BlockGuide />
            <BlockProductPagination />
        </React.Fragment>
    )
}

export default Cyber;


