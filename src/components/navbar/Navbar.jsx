import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';

import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => {
	return (
		<>
			<p className='gpt3__navbar-links-link'>
				<a href='#home'>Home</a>
			</p>
			<p className='gpt3__navbar-links-link'>
				<a href='#what'>What's GPT3</a>
			</p>
			<p className='gpt3__navbar-links-link'>
				<a href='#possibility'>OpenAI</a>
			</p>
			<p className='gpt3__navbar-links-link'>
				<a href='#features'>Case Studies</a>
			</p>
			<p className='gpt3__navbar-links-link'>
				<a href='#blog'>Library</a>
			</p>
		</>
	);
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className='gpt3__navbar'>
			<div className='gpt3__navbar-links'>
				<div className='gpt3__navbar-links_logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='gpt3__navbar-links_container'>
					<Menu />
				</div>
			</div>
			<div className='gpt3__navbar-sign'>
				<p>Sign in</p>
				<button type='button'>Sign up</button>
			</div>
			<div className='gpt3__navbar-menu'>
				{toggleMenu ? (
					<RiCloseLine
						color='#fff'
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color='#fff'
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className='gpt3__navbar-menu_container scale-up-center'>
						<div className='gpt3__navbar-menu_container-links'>
							<Menu />
						</div>
						<div className='gpt3__navbar-menu_container-links-sign'>
							<p>Sign in</p>
							<button type='button'>Sign up</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
