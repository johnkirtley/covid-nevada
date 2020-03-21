import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

export const Stats = () => {
	const [nevada, setNevada] = useState({});
	const [cases, setCases] = useState([]);
	const [recoveries, setRecoveries] = useState([]);
	const [deaths, setDeaths] = useState([]);

	useEffect(() => {
		axios
			.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/122')
			.then(res => {
				// console.log(res.data.location.latest);
				// console.log(res.data.location.timelines.confirmed.timeline);
				setCases(res.data.location.timelines.confirmed.timeline);
				setRecoveries(res.data.location.timelines.recovered.timeline);
				setDeaths(res.data.location.timelines.deaths.timeline);
				setNevada(res.data.location.latest);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	// Dates

	// Cases
	const caseCount = Object.values(cases);
	const caseDates = Object.keys(cases);
	const lastTenCaseDates = caseDates.splice(40, caseDates.length - 1);
	const lastTenCases = caseCount.splice(40, caseCount.length - 1);

	const formattedDates = lastTenCaseDates.map(string => {
		return string.substring(0, 10);
	});

	// Recoveries
	const recoveryCount = Object.values(recoveries);
	const lastTenRecoveryDates = recoveryCount.splice(
		40,
		recoveryCount.length - 1
	);
	console.log('recovery', lastTenRecoveryDates);

	// Deaths
	const deathCount = Object.values(deaths);
	const lastTenDeathDays = deathCount.splice(40, deathCount.length - 1);
	console.log('deaths', lastTenDeathDays);

	const data = {
		labels: formattedDates,
		datasets: [
			{
				label: 'Cases',
				backgroundColor: 'orange',
				borderColor: 'orange',
				fill: 'none',
				xAxisId: 'Case Number',
				data: lastTenCases
			},
			{
				label: 'Recoveries',
				backgroundColor: 'green',
				borderColor: 'green',
				fill: 'none',
				data: lastTenRecoveryDates
			},
			{
				label: 'Deaths',
				backgroundColor: 'red',
				borderColor: 'red',
				fill: 'none',
				data: lastTenDeathDays
			}
		]
	};

	return (
		<div className='stats-container' id='stats'>
			<h2 className='stats-title'>Nevada Statistics</h2>
			<div className='stats-wrapper'>
				<Card className='stats cases'>
					<CardContent>Confirmed Cases</CardContent>
					<CardContent>{nevada.confirmed}</CardContent>
				</Card>
				<Card className='stats deaths'>
					<CardContent>Confirmed Deaths</CardContent>
					<CardContent>{nevada.deaths}</CardContent>
				</Card>
				<Card className='stats recoveries'>
					<CardContent>Confirmed Recoveries</CardContent>
					<CardContent>{nevada.recovered}</CardContent>
				</Card>
			</div>
			<Card className='chart-wrapper'>
				<Line
					data={data}
					options={{
						scales: {
							xAxes: [
								{
									stacked: true
								}
							]
						}
					}}
					height={500}
					width={700}
				/>
			</Card>
			<p className='data-disclaimer'>
				Data provided by Johns Hopkins University Center for Systems Science and
				Engineering (JHU CSSE)
			</p>
		</div>
	);
};
