import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

class MyCarousel extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-7">
                    <Carousel className="carousel-class">
                        <Carousel.Item>
                        <img width={600} height={400} alt="image1" src="/images/carousel1a.png" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={400} alt="image2" src="/images/carousel2.png" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={400} alt="image3" src="/images/carousel3.png" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={400} alt="image4" src="/images/carousel4.png" />
                        <Carousel.Caption>
                            <h3>Fourth slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={400} alt="image4" src="/images/display1.png" />
                        <Carousel.Caption>
                            <h3>5 slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={400} alt="image4" src="/images/display2.png" />
                        <Carousel.Caption>
                            <h3>6 slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={400} alt="image4" src="/images/display3a.png" />
                        <Carousel.Caption>
                            <h3>7 slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={400} alt="image4" src="/images/display3b.png" />
                        <Carousel.Caption>
                            <h3>8 slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            
        );
    }
}
export default MyCarousel;