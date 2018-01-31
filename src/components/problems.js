import React, { Component } from 'react';
import { Problem } from '../utils/problems';
import { ProblemEng } from '../utils/problems-eng';
import ProblemItem from './problem-item';


class Problems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Prop: Problem
        }
    }
    
    componentDidMount() {
        
        if(this.props.eng) {
           this.setState({
               Prop: ProblemEng
           });
        } else {
            this.setState({
                Prop: Problem
            });
        }
    }

    renderProblems() {
        return this.state.Prop.map((item) => {
            return <ProblemItem key={item.id} image={item.imageSrc} alt={item.imageAlt} class={item.id} title={item.name} text={item.text}/>
        });
    }
    render(){
        return(
            <div className="section-destinations" id="section-destinations" >
                <div className="u-margin-bottom-big u-center-text">
                    <h2 className="heading-secondary">
                    {this.state.Prop[2].heading}
                    </h2>
                </div>
                    <div className="row">
                        {this.renderProblems()}
                    </div>
                <div className="u-center-text u-margin-top-big">
                
                     
                </div>
            </div>
        );
    }
}

export default Problems;