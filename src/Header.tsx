import React from 'react';
import {logo} from './images';
import './assets/css/Header.css';

const Header = () =>  {
    return (
		<div className="header-container">
			<header id="header" className="alt">
				<div className="logo">
					<a href="#header">
						<img src={logo} alt="theseon" />
				    </a>
				</div>
				<a href="#menu">
					Menu
				</a>
			</header>
		</div>	
	)
}

export default Header;