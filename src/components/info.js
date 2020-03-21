import React from 'react';
import { Grid, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faThermometerThreeQuarters,
	faStethoscope,
	faSurprise
} from '@fortawesome/free-solid-svg-icons';

export const Info = () => {
	return (
		<div>
			<h2>Common Symptoms</h2>
			<Grid
				container
				spacing={2}
				direction='row'
				justify='center'
				align='center'>
				<Grid item xs={3}>
					<Card className='symptom'>
						<FontAwesomeIcon icon={faThermometerThreeQuarters} />
						Fever
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card className='symptom'>
						<FontAwesomeIcon icon={faSurprise} />
						Cough
					</Card>
				</Grid>
				<Grid item xs={3}>
					<Card className='symptom'>
						<FontAwesomeIcon icon={faStethoscope} />
						Shortness of Breath
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};
