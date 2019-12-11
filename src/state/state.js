import React, { useState, useEffect } from 'react';
import { Line, Block } from './style.js';
import Component from './component/component.js';
import { Data } from './data.js';

export default function State(){
	
	const [level, setLevel] = useState(Data);
	
	const render = (x, y, el) => {
		return(
			<Component 
				X={x}
				Y={y}
				Data={el}
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