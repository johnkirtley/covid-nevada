import React from 'react';

export const Nav = () => {
	return (
		<div>
			<nav>
				<ul className='nav-container'>
					<a href='#home'>
						<li>Home</li>
					</a>
					<a href='#stats'>
						<li>Cases</li>
					</a>
					<a href='#information'>
						<li>Information</li>
					</a>
				</ul>
			</nav>
		</div>
	);
};
