import React from 'react';
import './App.css';
import { Nav } from './components/nav';
import { Header } from './components/header';
import { Stats } from './components/stats';
import { Info } from './components/info';

function App() {
	return (
		<div>
			{/* <Nav /> */}
			<Header />
			<Stats />
			<Info />
		</div>
	);
}

export default App;
