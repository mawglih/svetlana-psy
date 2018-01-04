import React, { Component } from 'react';
import CertificateItem from './certificate-item';
import { DiplomaData } from '../utils/diploma-data';

class Certificates extends Component {

    renderCerts() {
        return DiplomaData.map((item) => {
            return <CertificateItem image={item.image} text={item.text} key={DiplomaData.indexOf(item)}/>
        });
    }

    render() {
        return(
            <div className="row">
                <h2 className="heading-secondary cert__heading">Мои сертификаты</h2>
                <div className="cert">
                    {this.renderCerts()}
                </div>

            </div>
        );
    }
}
export default Certificates;
