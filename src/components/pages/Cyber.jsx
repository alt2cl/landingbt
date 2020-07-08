import React from 'react';
import BlockSearch from './../blocks/BlockSearch'
import BlockMainCarousel from './../blocks/BlockMainCarousel'
import BlockBabyPacks from './../blocks/BlockBabyPacks'
import BlockBabyStages from './../blocks/BlockBabyStages'
import BlockCategoriesList from './../blocks/BlockCategoriesList'
import BlockNewsletter from './../blocks/BlockNewsletter'

import BlockCategories from './../blocks/BlockCategories'
import BlockGuide from './../blocks/BlockGuide'
import BlockProductPagination from './../blocks/BlockProductPagination'

import dataBabyPacks from './../../data/baby-packs';
import dataFlashOffer from './../../data/flash';

import iconHeart from '../../assets/img/icons/heart.png'
import iconClock from '../../assets/img/icons/clock-purple.svg'
import iconBT from '../../assets/img/logos/bt_cm_hero.svg'
import iconNewsletter from '../../assets/img/icons/mailOrange.svg'
import iconBrands from './../../assets/img/logos/headBrands.png'



import BlockContact from '../blocks/BlockContact';
import Footer from '../transversales/Footer';




const Cyber = ({name}) => {
    return (
        <React.Fragment>
          
            <BlockSearch 
                name="BlockSearch"
                iconHead={iconBrands} 
                titleHead="¡Despierta! Es CyberMonday en Babytuto" 
                bodyHead="No te decimos como criar, sí como comprar."
                />  

            <BlockMainCarousel  />

            <BlockBabyPacks 
                offerFlash 
                data={dataFlashOffer}
                iconHead={iconClock} 
                titleHead="¡Ofertas Flash!" 
                bodyHead="No te pierdas estas ofertas por un tiempo limitado"  />
            
            <BlockBabyPacks 
                bgColor="pink"
                data={dataBabyPacks}
                iconHead={iconHeart} 
                titleHead="¡Baby Packs!" 
                bodyHead="Revisa nuestra selección de productos que combinan bien juntos."  />

            

            <BlockBabyStages
                titleHead="Etapas de tu bebé" 
                bodyHead="Conoce los +35.000 productos específicos para cada una de las etapas de tu bebé" />

            <BlockNewsletter
                iconHead={iconNewsletter} 
                titleHead="Suscríbete a Nuestro Newsletter" 
                bodyHead="Suscríbete para recibir las mejores ofertas para tu bebé en tu email" />

            

            
            
            <BlockCategoriesList 
                titleHead="Filtra productos por categoría" 
                bodyHead="Selecciona y navega por productos en su categoría" />

            <BlockCategories blockNumber={0} showBnr={1}/>



            <BlockCategories blockNumber={1}  showBnr={4}/>

            <BlockCategories blockNumber={2}  showBnr={3}/>

            <BlockContact />

            <BlockCategories blockNumber={3}  showBnr={2}/>

            <BlockCategories blockNumber={4}  showBnr={3}/>

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


