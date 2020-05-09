import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'
import {ReactComponent as Email} from '../../assets/icons/mail.svg';
import {ReactComponent as Phone} from '../../assets/icons/phone.svg';
import {ReactComponent as Github} from '../../assets/icons/github.svg';
import {ReactComponent as LinkedIn} from '../../assets/icons/linkedin.svg';
function Footer() {
    return(
        <footer className="pt-3 bg-light">
            <div className="">
                <div className="footer-bar linkuri bg-light d-flex justify-content-between p-3">
                    <div className="mb-2">
                        <h5 className="m-0">Link-uri rapide</h5>
                        <div className="d-flex flex-column">
                            <Link to='/about'>Despre</Link>
                            <Link to='/terms-and-conditions'>Termeni şi condiţii</Link>
                        </div>
                    </div>
                    <div className="mb-2">
                        <h5 className="m-0">Contactează-mă</h5>
                        <div className="d-flex flex-row">
                            <Email className="mr-1 mb-1 footer-icon"/>
                            <p className="mb-1">email@email.com</p>
                        </div>
                        <div className="d-flex flex-row">
                            <Phone className="mr-1 footer-icon"/>
                            <p className="m-0">+40712334567</p>
                        </div>
                    </div>
                    <div className="mb-2">
                        <h5 className="m-0">Contactează-mă</h5>
                        <div className="d-flex flex-row">
                            <Github className="mr-1 mb-1 footer-icon"/>
                            <p className="mb-1">github</p>
                        </div>
                        <div className="d-flex flex-row">
                            <LinkedIn className="mr-1 footer-icon"/>
                            <p className="m-0">LinkedIn</p>
                        </div>
                    </div>
                </div>
                <div className="text-center py-3">
                    <p>&copy; Lucian Mihai</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;