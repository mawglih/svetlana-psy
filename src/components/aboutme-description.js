import React, { Component } from 'react';
import AboutMeDescriptionItem from './aboutme-description-item';
import { AboutMeData2 } from '../utils/aboutme-data2';
import { AboutMeDataEng2 } from '../utils/aboutme-data-eng2';
import { Link } from 'react-router-dom';

class AboutMeDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prop: AboutMeData2
        }
    }
    
    componentDidMount() {
        
        if(this.props.eng) {
           this.setState({
               Prop: AboutMeDataEng2
           });
        } else {
            this.setState({
                Prop: AboutMeData2
            });
        }
    }

    renderItems() {
        return this.state.Prop.map((item,index) => {
            return <AboutMeDescriptionItem key={index} text={item.text} />
        });
    }

    render() {
        return(
            <div className="section-testimonials u-margin-top-medium">
                <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src='../images/video1.mp4' type="video/mp4"/>
                    <source src='../images/video1.webm' type="video/webm"/>
                    Your browser is not supported!
                </video>
            </div>

                {this.renderItems()}
                <div className="u-center-text u-margin-top-big">
        <Link to="/cons"  className="btn__text" >{this.props.eng ? <span>To find more about my consultations</span> : <span>Подробнее о том, как проходят консультации читайте здесь</span>} &rarr;</Link>
                </div>
            </div>
        );
    }
}

export default AboutMeDescription;