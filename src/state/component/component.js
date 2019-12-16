import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Block from './style.js';
import { options } from '../../constants/options.js';

export default function Component({ X, Y, Data, toggleLevelData }){
	
	const [render, setRender] = useState();
	const [id, setId] = useState();
	const [idIndex, setIdIndex] = useState(0);
	const { selectedBlock } = useSelector(store => store.editor);
	
	const toggleId = () => {
		if(selectedBlock !== ""){
			toggleLevelData(X,Y,selectedBlock);
			setRender(toggleBlock(selectedBlock));
		}
	}
	
	useEffect(() => {
		setRender(toggleBlock(id));
	}, [])
	
	function toggleBlock(id){
		switch(id){
			default:
				return (<Block.Undefined />);
			case "1-1":
				return (<Block.NoBlock />);
			case "1-2":
				return (<Block.Block />);
			case "1-3":
				return (<Block.Start />);
			case "1-4":
				return (<Block.Finish />);
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






