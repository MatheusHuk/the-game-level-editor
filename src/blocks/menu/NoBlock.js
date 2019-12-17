import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Style from './style.js';
import { select } from '../../store/ducks/editor';

export default function Block({ game }){
	
	const { selectedBlock } = useSelector(store => store.editor);
	const id = "1-1";
	const dispatch = useDispatch();
	
	const selectBlock = () => {
		if(game)
			return;
		if(selectedBlock !== id){
			dispatch(select(id));
		}else{
			dispatch(select(""));
		}
	}
	
	useEffect(() => {
	}, [selectedBlock]);
	
	return (
		<Style.NoBlock 
			onClick={selectBlock}
			selected={id == selectedBlock}
			game={game}
		/>
	);
}