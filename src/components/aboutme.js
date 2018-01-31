import React, { Component } from 'react';
import { AboutMeData } from '../utils/aboutme-data';
import { AboutMeDataEng } from '../utils/aboutme-data-eng';
import AboutMeItem from './aboutme-item';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prop: AboutMeData
        }
    }
    
    componentDidMount() {
        
        if(this.props.eng) {
           this.setState({
               Prop: AboutMeDataEng
           });
        } else {
            this.setState({
                Prop: AboutMeData
            });
        }
    }
    renderAbout() {
        return this.state.Prop.map((data, index) => {
            return <AboutMeItem key={index} text={data.text} />
        });
    }
    
    render() {
        return(
            <div className="aboutme-div col-md-5">
            <ul className="aboutme-list">
                {this.renderAbout()}
            </ul>
            </div>
        )
    }
}

export default AboutMe;