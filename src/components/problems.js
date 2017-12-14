import React, { Component } from 'react';
import { Problem } from '../utils/problems';
import ProblemItem from './problem-item';


class Problems extends Component {
    renderProblems() {
        return Problem.map((item) => {
            return <ProblemItem key={item.id} image={item.imageSrc} alt={item.imageAlt} class={item.id} title={item.name} text={item.text}/>
        });
    }
    render(){
        return(
            <div className="section-destinations" id="section-destinations" >
                <div className="u-margin-bottom-big u-center-text">
                    <h2 className="heading-secondary">
                    С какими проблемами и запросами женщин я работаю чаще всего?
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

export default Problems