import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Block from '../../blocks/game';
import { options } from '../../constants/options.js';
import toggleBlock from './toggleBlock.js';

export default function Component({ X, Y, Data, toggleLevelData }){
	
	const [render, setRender] = useState();
	const [id, setId] = useState(Data);
	const [idIndex, setIdIndex] = useState(0);
	const { selectedBlock } = useSelector(store => store.editor);
	
	useEffect(() => {
		setRender(toggleBlock(id));
	}, [])
	
	const toggleId = () => {
		if(selectedBlock !== ""){
			toggleLevelData(X,Y,selectedBlock);
			setRender(toggleBlock(selectedBlock));
		}
	}
	
	return (
		<div onClick={toggleId}>
			{
				render
			}
		</div>
	)
};






