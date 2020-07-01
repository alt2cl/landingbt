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

import dataBabyPacks from './../../data/baby-packs';
import dataFlashOffer from './../../data/flash';

import iconHeart from '../../assets/img/icons/heart.png'
import iconClock from '../../assets/img/icons/clock-purple.svg'
import iconBT from '../../assets/img/logos/bt_cm_hero.svg'




const Cyber = ({name}) => {
    return (
        <React.Fragment>
          
            <BlockSearch 
                name="BlockSearch"
                iconHead={iconBT} 
                titleHead="¡Despierta! Es CyberMonday en Babytuto" 
                bodyHead="No te pierdas estas ofertas increíbles que tenemos para ti y tu bebé, con más de 35.000 productos y 400 marcas exclusivas."
                />  

            <BlockMainCarousel />
            
            <BlockBabyPacks 
                bgColor="pink"
                data={dataBabyPacks}
                iconHead={iconHeart} 
                titleHead="¡Baby Packs!" 
                bodyHead="Revisa nuestra selección de productos que combinan bien juntos."  />

            <BlockBabyPacks 
                offerFlash 
                data={dataFlashOffer}
                iconHead={iconClock} 
                titleHead="¡Ofertas Flash!" 
                bodyHead="No te pierdas estas ofertas por un tiempo limitado"  />

            <BlockBabyStages
                titleHead="Etapas de tu bebé" 
                bodyHead="Conoce los +35.000 productos específicos para cada una de las etapas de tu bebé" />

            <BlockCategoriesList 
                titleHead="Filtra productos por categoría" 
                bodyHead="Selecciona y navega por productos en su categoría" />

            <BlockCategories blockNumber={0}/>

            <BlockCategories blockNumber={1}/>

            <BlockCategories blockNumber={2}/>

            <BlockCategories blockNumber={3}/>

            <BlockCategories blockNumber={4}/>

            <BlockGuide 
                titleHead="Guía de Compras para Padres" 
                bodyHead="¿Mamá por primera vez?, ¿Una Navidad divertida? ¡Tenemos la mejor selección de productos para tu bebé!"/>

            <BlockProductPagination 
                titleHead="Todos nuestros productos en oferta" 
                bodyHead="" />
        
        </React.Fragment>
    )
}

export default Cyber;


