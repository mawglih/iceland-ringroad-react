import React from 'react';

export default (props) => {
    return(
        <footer className="footer">
            <div className="footer__logo-box">
                <img src="./logo_zv.png" alt="logo" className="footer__logo"/>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                    <ul className="footer__list">   
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                    Copyright &copy; Oleg Markoff. <br/><a href="oleg-dev.com" className="footer__link">Visit website</a>. 
                    </p>
                </div>
            </div>
        </footer>
    )
}