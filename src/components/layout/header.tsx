import React, {Component} from 'react';
import {logo} from '../../images';

// class Header extends Component {
// 	render() {
// 		return (
// 		<nav className="header">
// 			{/* <div className="wrapper"> */}
// 			<div>
// 				<header id="page-header" className="page-header">
// 					<div className="container">
// 						<a  className="brand-logo" href="">
// 							<img src={logo} alt="theseon" />
// 						</a>
// 					</div>
// 					<a href="#menu">
// 						Menu
// 					</a>
// 				</header>
// 			</div>	
// 		</nav>
// 		)
// 	}
// }

class Header extends Component {
	render() {
		return (
		<div className="header">
			<a href=" " className="logo">
				<img src={logo} alt="theseon." width="40"/>
			</a>
			<div className="header-right">
				<a href="#home">Home</a>
				<a href="#contact">Contact</a>
				<a href="#about">About</a>
			</div>
		</div>
		);
	}
}

export default Header;