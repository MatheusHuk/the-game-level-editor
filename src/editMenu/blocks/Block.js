import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Style from '../style.js';
import { select } from '../../store/ducks/editor';

export default function Block(){
	
	const { selectedBlock } = useSelector(store => store.editor);
	const id = "1-2";
	const dispatch = useDispatch();
	
	const selectBlock = () => {
		dispatch(select(id))
	}
	
	useEffect(() => {
	}, [selectedBlock]);
	
	return (
		<Style.Block 
			onClick={selectBlock}
			selected={id == selectedBlock}
		/>
	);
}