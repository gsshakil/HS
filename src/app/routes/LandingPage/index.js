import React from 'react';
import YouTube from 'react-youtube';
import MasonryInfiniteScroller from 'react-masonry-infinite';

import ContainerHeader from 'components/ContainerHeader/index';
import ProjectCard from '../../../components/Projects/ProjectCard';

import ProductCard from '../../../components/Products/ProductCard';


import avatar from '../../../../public/avatar1.png';
import projectImage1 from '../../../../public/project1.gif';
import projectImage2 from '../../../../public/project2.jpg';


import intro from '../../../../public/intro.png';
import projectShowcase from '../../../../public/projectShowcase.png';
import creativePeople from '../../../../public/creativePeople.png';
import creativeIndustry from '../../../../public/creativeIndustry.png';
import product1 from '../../../../public/product1.png';
import product2 from '../../../../public/product2.png';
import product3 from '../../../../public/product3.png';
import product4 from '../../../../public/product4.png';
import product5 from '../../../../public/product5.png';
import product6 from '../../../../public/product6.png';
import product7 from '../../../../public/product7.png';
import product8 from '../../../../public/product8.png';
import endsec from '../../../../public/endsec.png';

import icon1 from '../../../../public/icon1.png';
import icon2 from '../../../../public/icon2.png';
import icon3 from '../../../../public/icon3.png';
import icon4 from '../../../../public/icon4.png';
import icon5 from '../../../../public/icon5.png';
import icon6 from '../../../../public/icon6.png';
import icon7 from '../../../../public/icon7.png';
import icon8 from '../../../../public/icon8.png';
import icon9 from '../../../../public/icon9.png';



class LandingPage extends React.Component {

    render() {

        let sizes = [{ columns: 4, gutter: 10 }, 
            { mq: '360px', columns: 1, gutter: 0 }, 
            { mq: '768px', columns: 3, gutter: 10 }, 
            { mq: '1024px', columns: 4, gutter: 10 }
        ]

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        var introStyle = {
            backgroundImage: 'url(' + intro + ')',
        };
        var introStyle2 = {
            textAlign: 'left',
            marginTop: '100px',
        };
        var introStyle3 = {
            display: 'table-cell',
            verticalAlign: 'middle',
        };
        var outroStyle = {
            backgroundImage: 'url(' + endsec + ')',
        };
        return (
            <div className="app-wrapper">
                 
                 <div className="row">
                    <div className="col-md-6">
                        <div className="right-content">
                            <h1>Your Quick Healing is Our Concern</h1>
                            <p>Healsoon is a set of interconnected Healthcare related features that focuses on Preventive and Emergency Healthcare</p>
                            <button className="btn btn-primary">CALL HOTLINE</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon1} alt="Online"/>
                                        <p>Consult Online</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon2} alt="Online"/>
                                        <p>Book Appointment</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon3} alt="Online"/>
                                        <p>Call Ambulance</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon4} alt="Online"/>
                                        <p>Order Medicine</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon5} alt="Online"/>
                                        <p>Book Hospital</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon6} alt="Online"/>
                                        <p>Book Lab Test</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon7} alt="Online"/>
                                        <p>Ask</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon8} alt="Online"/>
                                        <p>Marketplace</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-wrapper">
                                        <img src={icon9} alt="Online"/>
                                        <p>Health Feed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default LandingPage;