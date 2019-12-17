import React from 'react';
import * as Block from '../../blocks/game';

export default function toggleBlock(id){
	switch(id){
		case "1-1":
			return (<Block.NoBlock />);
		case "1-2":
			return (<Block.Block />);
		case "1-3":
			return (<Block.Start />);
		case "1-4":
			return (<Block.Finish />);
		case "2-1":
			return (<Block.Key />);
		case "2-2":
			return (<Block.Life />);
		case "2-3":
			return (<Block.Zip />);
		case "2-4":
			return (<Block.Crystal />);
	}
}