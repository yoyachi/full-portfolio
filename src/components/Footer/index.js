import React from "react";
import { FaGithub, FaLinkedin, } from 'react-icons/fa';

/*function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/yoyachi"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/julissa-hash-6a06024a"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			
		</footer>
	);
}
*/

function Footer() {
    
    return (
        <section id="footer" className='footer'>
            <a href="https://github.com/yoyachi" target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/julissa-hash-6a06024a" target='_blank' rel="noreferrer"><FaLinkedin /></a>
            
        </section>
    )
}

export default Footer;