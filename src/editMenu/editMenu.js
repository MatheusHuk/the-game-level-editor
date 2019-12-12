import React, { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import * as Style from './style.js';
import * as Block from './blocks';
import { options } from '../constants/options.js';

export default function EditMenu(){
	
	const [render, setRender] = useState();
	const [listIndex, setListIndex] = useState(0);
	useEffect(() => {
		setRender(renderList());
	}, []);
	
	function renderList(){
		return options[listIndex].map((block) => {
			return (
				<Style.Box>
					{
						diffBlock(block)
					}
				</Style.Box>
			);
		})
	}
	
	function diffBlock(block){
		switch(block){
			case "1-1":
				return (<><Block.NoBlock />No Block</>);
			case "1-2":
				return (<><Block.Block />Block</>);
			case "1-3":
				return (<><Block.Start />Start</>);
			case "1-4":
				return (<><Block.Finish />Finish</>);
		}
	}
	
	return (
		<Style.Edit>
			<ScrollContainer hideScrollBar={true} horizontal={false}>
				<Style.List>
					{
						render
					}
				</Style.List>
			</ScrollContainer>
		</Style.Edit>
	)
}