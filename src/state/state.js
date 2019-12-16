import React, { useState, useEffect } from 'react';
import { Line, Block } from './style.js';
import Component from './component/component.js';
import { Data } from './data.js';

export default function State(){
	
	const [level, setLevel] = useState(Data);
	const [levelData, setLevelData] = useState(Data);
	
	const toggleLevelData = (x, y, data) => {
		console.log('X: ',x);
		console.log('Y: ',y);
		console.log('Data: ',data);
		levelData[x][y] = data;
	}
	
	const render = (x, y, el) => {
		return(
			<Component 
				X={x}
				Y={y}
				Data={el}
				toggleLevelData={toggleLevelData}
			/>
		)
	}
	
	return (
		<>
			{
				level.map((data, i) => {
					return (
						<Line>
							{
								data.map((el, j) => {
									return (
										render(i, j, el)
									)
								})
							}
						</Line>
					)
				})
			}
		</>
	)
};