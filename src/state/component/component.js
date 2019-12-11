import React, { useState, useEffect } from 'react';
import * as Block from './style.js';
import { options } from './options.js';

export default function Component({ X, Y, Data }){
	
	const [render, setRender] = useState(<Block.NoBlock />);
	const [id, setId] = useState("1-1");
	const [idIndex, setIdIndex] = useState(0);
	
	const toggleId = () => {
		if(idIndex === 3){
			setIdIndex(0);
		} else {
			setIdIndex(idIndex + 1);
		}
	}
	
	useEffect(() => {
		setId(options[idIndex]);
	}, [idIndex]);
	
	useEffect(() => {
		setRender(toggleBlock(id));
	}, [id])
	
	function toggleBlock(id){
		switch(id){
			case "1-1":
				return (<Block.NoBlock />);
			case "1-2":
				return (<Block.Block />);
			case "1-3":
				return (<Block.Start />);
			case "1-4":
				return (<Block.Finish />);
			default:
				return (<Block.Undefined />);
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






