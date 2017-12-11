import React from 'react';
 export default (props) => {
         return(
            <div className="popup"  id="popup">
                <div className="popup__box">
                    <div className="popup__left">
                        <img src="./images/pic1.jpg" className="popup__image" alt="pic"/>
                        <img src="./images/pic2.jpg" className="popup__image" alt=""/>
                    </div>
                    <div className="popup__right">
                        <a href="#section-tours" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">Important! &ndash; Terms and conditions</h3>
                        <p className="popup__text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, libero itaque unde enim similique non quibusdam soluta id eaque, aperiam consequuntur delectus nostrum pariatur, ab debitis repellendus recusandae laboriosam sapiente?
                        </p>
                        <button className="btn btn-blue">Book now</button>
                    </div>
                </div>
            </div>
         );
 }
