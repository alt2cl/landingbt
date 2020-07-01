import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const styles = { background: 'blue', color: 'white' } 

const WrapperCarousel = (props) => {
 
    
        return (
            <OwlCarousel
                className="owl-theme"
                id={props.id ? props.id : 'owl-demo'}
                dots={true}
                responsiveClass={true}
                draggable={true}
                nav={props.nav}
                lazyLoad={true}
                center={false}
                responsive={{
                0: {
                    items: 1,
                    loop: true,
                },
                900: {
                    items: props.showDesktop,
                    loop: false,
                },
                }}
            >
                {props.children}
                
            </OwlCarousel>
        );
    
}


export default WrapperCarousel;