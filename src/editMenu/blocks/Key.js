import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Style from '../style.js';
import { select } from '../../store/ducks/editor';

export default function Key(){
	
	const { selectedBlock } = useSelector(store => store.editor);
	const id = "2-1";
	const dispatch = useDispatch();
	
	const selectBlock = () => {
		if(selectedBlock !== id){
			dispatch(select(id));
		}else{
			dispatch(select(""));
		}
	}
	
	useEffect(() => {
	}, [selectedBlock]);
	
	return (
		<Style.Key 
			onClick={selectBlock}
			selected={id == selectedBlock}
		/>
	);
}