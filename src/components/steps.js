import React, { Component } from 'react';
import { StepsData } from '../utils/steps-data';
import { StepsDataEng } from '../utils/steps-data-eng';
import  StepsItem  from './steps-item';
import { LiData } from '../utils/li-data';
import { LiDataEng } from '../utils/li-data-eng';
import { Link } from 'react-router-dom';

class Steps extends Component {

constructor(props) {
    super(props);
    this.state = {
        Prop: StepsData
    };
}

componentDidMount() {
    
    if(this.props.eng) {
       this.setState({
           Prop: StepsDataEng
       });
    } else {
        this.setState({
            Prop: StepsData
        });
    }
}

render() {
    return(
        <div className="steps">
            <h1 className="steps__heading u-margin-bottom-big"><span className="steps__heading-sp1">{this.state.Prop[3].heading1}</span><span className="steps__heading-sp2">{this.state.Prop[3].heading2}</span></h1>
            <div className="steps__step-e1 steps__step">
                <h2 className="steps__heading-2 steps__heading-2-e1">{this.state.Prop[3].heading3}</h2>
                <div className="steps__block">
                    <p className="steps__block-text">{this.state.Prop[3].heading4}</p>
                    <ul className="steps__block-list">{this.props.eng ? LiDataEng.map((item, index) => {
                        return   <li className="steps__block-list-item" key={index}>{item}</li>
                    }) : LiData.map((item, index) => {
                        return   <li className="steps__block-list-item" key={index}>{item}</li>
                    })
                    }
                    </ul>
                    
                </div>
            </div>

            <div className="steps__step-e2 steps__step">
                <h2 className="steps__heading-2 steps__heading-2-e2">{this.state.Prop[3].heading5}</h2>
                {
                <StepsItem hiddenClass="visibleClass" text1={this.state.Prop[0].text1} text2={this.state.Prop[0].text2} text3={this.state.Prop[0].text3} buttonText={this.state.Prop[0].buttonText}/>
                }
                 
                
            </div>
            <div className="steps__step-e3 steps__step">
                <h2 className="steps__heading-2 steps__heading-2-e3">{this.state.Prop[3].heading6}</h2>
                {
                <StepsItem hiddenClass="hiddenClass" text1={this.state.Prop[1].text1} text2={this.state.Prop[1].text2} text3={this.state.Prop[1].text3} text4={this.state.Prop[1].text4}/>
                }
                
    
            </div>
            <div className="steps__step-e4 steps__step">
            <div className="steps__heading-2 steps__heading-2-e4">
                    <h3 className="steps__heading-2-pos">{this.state.Prop[3].heading7}
                    </h3>
                
                    </div>
                    {
                <StepsItem hiddenClass="hiddenClass" text1={this.state.Prop[2].text2} text2={this.state.Prop[2].text2} text3={this.state.Prop[2].text3} text4={this.state.Prop[2].text4}/>
                }
                
                </div>

                    {this.props.eng ? <h4 className="steps__heading-2 steps__heading-2-e5">I use these methods at the request of the client</h4> : <h4 className="steps__heading-2 steps__heading-2-e5">Эти методы работы я использую по желанию клиента.</h4> }
                    <Link to="/testimall" className="btn__text steps__heading-2-e6">{this.props.eng ?  <span>My clients' testimonials</span> : <span>Отзывы о работе со мной читайте здесь.</span>} &rarr;</Link>
        </div>
    )
    }
}
export default Steps;