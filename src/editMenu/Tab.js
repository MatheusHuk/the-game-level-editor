import React from 'react';
import * as Style from './style.js';

export default function Tab({ name, onclick, id, selected }){
	return (
		<Style.Tab selected={selected} onClick={onclick}>
			{name}
		</Style.Tab>
	);
}