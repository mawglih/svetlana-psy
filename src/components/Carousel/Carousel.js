import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

class MyCarousel extends Component {
    render() {
        return(
            <div className="u-margin-bottom-small">
            <h1 className="about-carousel-heading">Особенности работы со мной:</h1>
                <div className="col-md-7">
                    <Carousel className="carousel-class">
                        <Carousel.Item>
                        <img width={600} height={482} alt="image1" src="/images/carousel1.png" />
                        <Carousel.Caption className="carousel-caption">
                            
                            <h3>Конфиденциальность - информация о наших консультациях останется только между нами.</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={482} alt="image2" src="/images/carousel1.png" />
                        <Carousel.Caption>
                            
                            <h3>Персональный подход - мы подбираем наиболее комфортный для вас метод работы.</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width={600} height={482} alt="image3" src="/images/carousel1.png" />
                        <Carousel.Caption>
                            
                            <h3>Сессия длится от 60 до 90 минут, в зависимости от запроса. Но может не ограничиваться по времени. Работаем столько,сколько нужно.</h3>
                        </Carousel.Caption>
                        </Carousel.Item>

                        
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default MyCarousel;