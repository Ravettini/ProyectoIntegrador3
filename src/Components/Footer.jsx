import React from 'react'
import '../index.css';

export const Footer = () => {

return (
    <footer id="footerlol" className="footer-distributed ">

    <div className="footer-left">
        <h3>Stock<span>Master</span></h3>

        
        <p className="footer-company-name">Copyright © 2023 Equipo n1 Empujar <strong></strong> </p>
    </div>

    
    <div className="footer-right">
        
        <p className="footer-company-about">
        Pagina presentada como proyecto final de cursada de UTN.
        </p>
        <p className="footer-company-about text-center">
        <hr />
        Integrantes
        </p>
        <div className="container-footer-icons d-flex justify-content-around">
        <div className="footer-icons">
            <p className='textito'>Ignacio Ravettini</p>
            <a target="_blank" href="https://www.instagram.com/ravexd_/?hl=es-la"><i className="fa fa-instagram"></i></a>
            <a target="_blank" href="mailto:ignaciorave21@gmail.com"><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href="#"><i className=" fa-brands fa-github"> </i></a>
        </div>
        <div className="footer-icons">
        <p className='textito'>Luca Luzzi</p>
            <a target="_blank" href="https://www.instagram.com/ravexd_/?hl=es-la"><i className="fa fa-instagram"></i></a>
            <a target="_blank" href="mailto:ignaciorave21@gmail.com"><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href="#"><i className=" fa-brands fa-github"> </i></a>
        </div>
        </div>
    </div>
</footer>
)
}

export default Footer;