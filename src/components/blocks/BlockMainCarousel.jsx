import React from 'react'
import WrapperCarousel from './../wrappers/WrapperCarousel'
import CardBnr from './../cards/CardBnr'





const BlockMainCarousel = (props) => {

    let array = []

    function listCards(){
            for (let index = 1; index <= 10; index++) {
                array.push (
                    <div className="item" key={index}>
                        <CardBnr 
                        img="https://s3.babytuto.com/62a70d22c11eb9ee6b556508944b6d4a.jpg"
                        link="https://cybermonday.babytuto.com/?ref=landing-cyber" />
                        <h5> {index} </h5>
                    </div>
                )
            }
        return array;
    }
    return (
        <React.Fragment>
            <div style={{display: 'none'}}>
                Block main Carousel 
            </div>
            <WrapperCarousel nav={true}>

                {listCards()}
                
            </WrapperCarousel>
        </React.Fragment>
    )
}

export default BlockMainCarousel;
