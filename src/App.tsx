import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const games = [
	{
		id: 1,
		title: "Final Fantasy XVI"
	},
	{
		id: 2,
		title: "Baten Kaitos"
	},
	{
		id: 3,
		title: "Persona 3 Reload"
	}
]

function App() {
return (
	<>
		<Typography variant='h1'>Omni-GLM Web Client Prototype</Typography>
		<Table>
			<TableHead>
				<TableCell>ID</TableCell>
				<TableCell>Title</TableCell>
			</TableHead>
			<TableBody>
				{games.map((game) => (
					<TableRow key={game.id}>
						<TableCell>{game.id}</TableCell>
						<TableCell>{game.title}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
		<Grid sm={6}>
			<Button>Add Game</Button>
			<Button>Edit Game</Button>
			<Button>Delete Game</Button>
			<Button>Search Games</Button>
		</Grid>
	</>
);
}

export default App;
