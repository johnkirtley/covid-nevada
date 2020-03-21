import React from 'react';
import { Button } from '@material-ui/core';

export const Header = () => {
	return (
		<>
			<div className='header-container'>
				<h1 className='header-title'>COVID-19 NEVADA</h1>
				<div className='button-container'>
					<Button variant='contained' color='primary' className='header-button'>
						<a href='#stats'>See Cases</a>
					</Button>
					<Button variant='contained' color='primary' className='header-button'>
						<a href='info'>More Info</a>
					</Button>
				</div>
			</div>
		</>
	);
};
