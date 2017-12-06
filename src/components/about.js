import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <div>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting road trip for adventurous people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">You are going to fall in love with icelandic views</h3>
                            <p className="paragraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, optio saepe natus eum dolor excepturi. Accusamus iste itaque atque dicta quo sed veritatis consequuntur non voluptate, dignissimos culpa laudantium mollitia.
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-small">Have an adventure of a lifetime</h3>
                            <p className="paragraph">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut corporis et soluta vitae, nisi delectus, fuga quaerat hic nostrum rem fugit quas beatae consequatur sapiente doloribus quis perspiciatis modi? Heritatis consequuntur non voluptate, dignissimos culpa laudantium mollitia.
                            </p>
                                <a  className="btn-text" href="#">Learn more &rarr;</a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src="./images/pic1.jpg" className="composition__photo composition__photo--p1" alt="photo1"/>
                                <img src="./images/pic2.jpg" className="composition__photo composition__photo--p2" alt="photo2"/>
                                <img src="./images/pic4.jpg" className="composition__photo composition__photo--p4" alt="photo4"/>
                                <img src="./images/pic3.jpg" className="composition__photo composition__photo--p3" alt="photo3"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default About;