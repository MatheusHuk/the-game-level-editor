import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line, Block } from './style.js';
import Component from './component/component.js';
import { Data } from './data.js';
import { changeLevelData } from '../store/ducks/editor';

export default function State(){
	
	const dispatch = useDispatch();
	const [render, setRender] = useState(Data);
	const [level, setLevel] = useState(Data);
	const { levelData } = useSelector(store => store.editor);
	
	useEffect(() => {
		dispatch(changeLevelData(Data));
	}, []);
	
	const toggleLevelData = (x, y, data) => {
		level[x][y] = data;
		dispatch(changeLevelData(level));
	}
	
	const component = (x, y, el) => {
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
				render.map((data, i) => {
					return (
						<Line>
							{
								data.map((el, j) => {
									return (
										component(i, j, el)
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