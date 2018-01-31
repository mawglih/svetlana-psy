import React, { Component } from 'react';
import CertificateItem from './certificate-item';
import { DiplomaData } from '../utils/diploma-data';
import { DiplomaDataEng } from '../utils/diploma-data-eng';

class Certificates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prop: DiplomaData
        }
    }
    
    componentDidMount() {
        
        if(this.props.eng) {
           this.setState({
               Prop: DiplomaDataEng
           });
        } else {
            this.setState({
                Prop: DiplomaData
            });
        }
    }

    renderCerts() {
        return this.state.Prop.map((item, index) => {
            return <CertificateItem image={item.image} text={item.text} key={index}/>
        });
    }

    render() {
        return(
            <div className="row">
                {this.props.eng ? <h2 className="heading-secondary cert__heading">Certifications</h2> : <h2 className="heading-secondary cert__heading">Мои сертификаты</h2>}
                <div className="cert">
                    {this.renderCerts()}
                </div>

            </div>
        );
    }
}
export default Certificates;
