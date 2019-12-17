import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Style from './style.js';
import { select } from '../../store/ducks/editor';

export default function Block(){
	
	return (
		<Style.Block />
	);
}