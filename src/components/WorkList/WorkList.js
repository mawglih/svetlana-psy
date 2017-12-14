import React, { Component } from 'react';
import { Item } from '../../utils/Item';
import WorkItem from '../WorkItem/WorkItem';

class WorkList extends Component {

    render() {
        return(
            <div>
                <h2>С какими проблемами и запросами женщин я работаю чаще всего?</h2>

                <WorkItem  name={Item[0].name} imageSrc={Item[0].imageSrc} imageAlt={Item[0].imageAlt} text={Item[0].text} textSmall={Item[0].textSmall}/>
                <WorkItem  name={Item[1].name} imageSrc={Item[1].imageSrc} imageAlt={Item[1].imageAlt} text={Item[1].text} textSmall={Item[1].textSmall}/>
                <WorkItem  name={Item[2].name} imageSrc={Item[2].imageSrc} imageAlt={Item[2].imageAlt} text={Item[2].text} textSmall={Item[2].textSmall}/>
            </div>
        );
    }
}
export default WorkList;