import React, { Component} from 'react';
import FeatureBox from './feature-box';
import { Data } from '../utils/data';

    class Features extends Component {
        render() {
            return(
                <div>
                    <div className="section-features">
                        <div className="row">
                            <FeatureBox icon={Data[0].icon} title={Data[0].title} text={Data[0].text}/>
                            <FeatureBox icon={Data[1].icon} title={Data[1].title} text={Data[1].text}/>
                            <FeatureBox icon={Data[2].icon} title={Data[2].title} text={Data[2].text}/> 
                            <FeatureBox icon={Data[3].icon} title={Data[3].title} text={Data[3].text}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
export default Features;