import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import ChatboxReader from '@alt1/chatbox';
import { mixColor } from '@alt1/base';

import { Boss } from './rotations/types';
import voragoMelee from './rotations/voragoMelee';
import nexMelee from './rotations/nexMelee';
import Rotation from './components/Rotation';
import Phase from './components/Phase';

//tell webpack to add index.html and appconfig.json to output
require('!file-loader?name=[name].[ext]!./index.html');
require('!file-loader?name=[name].[ext]!./appconfig.json');
require('!file-loader?name=[name].[ext]!./app_icon.png');

const chatboxReader: ChatboxReader = new ChatboxReader();

chatboxReader.readargs = {
	colors: [
		mixColor(159, 255, 159), // Clan chat green
		mixColor(153, 255, 153), // 'Nex:' green exact
		mixColor(153, 255, 153), // 'Nex:' green
		mixColor(155, 48, 255), // 'Nex:' purple exact
		mixColor(155, 45, 255), // 'Nex:' purple
		mixColor(255, 0, 255), //
		mixColor(0, 255, 255), //
		mixColor(255, 0, 0), // Red
		mixColor(255, 255, 255), // White
		mixColor(127, 169, 255) // Clock blue
	]
}
const App = () => {
	const [boss, setBoss] = useState(nexMelee as Boss);
	const [phase, setPhase] = useState(0);
	if (window.alt1) {
		alt1.identifyAppUrl('./appconfig.json');
		// setInterval(function () {
		// 	if (!chatboxReader.pos) {
		// 		console.log('trying to find chatbox');
		// 		try {
		// 			chatboxReader.find();
		// 		} catch (err) {
		// 			console.log('retrying');
		// 		}
		// 	}
		// }, 600);
		if (phase >= boss.phases.length) {
			return (
				<div>
					<p>Boss dead</p>
					<p onClick={() => setPhase(0)}>Restart</p>
				</div>
			);
		}
		return (
			<div>
				<Phase phase={boss.phases[phase]} />
				<p onClick={() => setPhase(phase + 1)}>Next phase</p>
				<Rotation rotation={boss.rotations[phase]} />
			</div>
		);
	}

	return (
		<div>
			<a href='alt1://addapp/D:/Victor/workspace/alt1minimal/dist/appconfig.json'>
				Click here to add this app
			</a>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
