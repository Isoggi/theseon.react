import React from 'react';
import logo from './images/logo.png';
import './Header.css';

function Header() {
    return (
		<div class="header-container">
			<header id="header" class="alt">
				<div class="logo">
					<a href="#">
						<img href={logo} alt="theseon" />
				        </a>
				    </div>
				<a href="#menu">Menu</a>
			</header>
            </div>
			);
		}
		export default Header;