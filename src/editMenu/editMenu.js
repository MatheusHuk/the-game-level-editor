import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import * as Style from './style.js';
import * as Block from './blocks';
import { options } from '../constants/options.js';
import { lists } from '../constants/lists.js';
import { selectList } from '../store/ducks/editor';

export default function EditMenu(){
	
	const dispatch = useDispatch();
	
	const [render, setRender] = useState();
	const [typeList, setTypeList] = useState();
	const { selectedList } = useSelector((store) => store.editor);
	
	useEffect(() => {
		setRender(renderBlockList());
		setTypeList(renderList());
	}, [selectedList]);
	
	function changeList(id){
		dispatch(selectList(id))
	}
	
	function renderBlockList(){
		return options[selectedList].map((block) => {
			return (
				<Style.Box>
					{
						diffBlock(block)
					}
				</Style.Box>
			);
		})
	}
	
	function renderList(){
		return lists.map((item, index) => {
			return (
				<Style.Tab 
					onClick={() => changeList(index)}
					selected={index === selectedList}
				>
					{item}
				</Style.Tab>
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
			case "2-1":
				return (<><Block.Key />Key</>);
			case "2-2":
				return (<><Block.Life />Life</>);
			case "2-3":
				return (<><Block.Zip />Zip</>);
			case "2-4":
				return (<><Block.Crystal />Crystal</>);
		}
	}
	
	return (
		<>
			<Style.Titles>
				{
					typeList
				}
			</Style.Titles>
			<Style.Edit>
				<ScrollContainer hideScrollBar={true} horizontal={false}>
					<Style.List>
						{
							render
						}
					</Style.List>
				</ScrollContainer>
			</Style.Edit>
		</>
	)
}