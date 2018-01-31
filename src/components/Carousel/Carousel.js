import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import { CarouselData } from '../../utils/carousel-data';
import { CarouselDataEng } from '../../utils/carousel-data-eng';

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prop: CarouselData
        }
    }

    componentDidMount() {
        if (this.props.eng) {
            this.setState({
                Prop: CarouselDataEng
            });
        } else {
            this.setState({
                Prop: CarouselData
            });
        }
    }

    render() {
        return(
            <div className="u-margin-bottom-small col-md-7">
            
                <div>
                    <Carousel className="carousel-class">
                        <Carousel.Item>
                        <img width={600} height={500} alt="image1" src="/images/igra1.png" />
                        <Carousel.Caption className="carousel-caption">
                            
                            <h3>{this.state.Prop[0].text1}</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={500} alt="image2" src="/images/igra2.png" />
                        <Carousel.Caption>
                            
                            <h3>{this.state.Prop[0].text2}</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={500} alt="image3" src="/images/igra3.png" />
                        <Carousel.Caption>
                            
                            <h3>{this.state.Prop[0].text3}</h3>
                        </Carousel.Caption>
                        </Carousel.Item>

                        
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default MyCarousel;