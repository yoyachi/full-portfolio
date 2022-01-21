import React from "react";
import { FaGithub, FaLinkedin, } from 'react-icons/fa';


function Footer() {
    
    return (
        <section id="footer" className='footer'>
            <a href="https://github.com/yoyachi" target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/julissa-hash-6a06024a" target='_blank' rel="noreferrer"><FaLinkedin /></a>
            
        </section>
    )
}

export default Footer;