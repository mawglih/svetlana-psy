import React, { Component } from 'react';
import Steps from '../../components/steps';


class Cons extends Component {
    render() {
        return (
            <div>
                <div className="cons__class row">
                <div className="cons__heading">
                    {this.props.eng ? <h2 className="cons__heading-text">Choosing your own life coach is half the battle. After all, a good life coach is not only a professional who has different methods , this is the person to whom you reveal your secrets, fears and doubts. There must be trust between us.</h2> : <h2 className="cons__heading-text">Выбор  своего психолога - это половина успеха. Ведь хороший психолог - это не только профессионал, владеющий разными методами. Это человек, которому вы раскрываете свои тайны, страхи и сомнения. Между нами должно быть доверие.</h2> }
                </div>
            </div>
            <Steps eng={this.props.eng}/>
            </div>
            
        );
    }
}
export default Cons;