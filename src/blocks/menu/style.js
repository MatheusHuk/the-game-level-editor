import styled from 'styled-components';
import * as images from '../../assets/images.js';

export const NoBlock = styled.div`
	width: 50px;
	height: 50px;
	background-color: #000;
	border: ${props => props.selected ? '2px solid yellow' : '1px solid white' };
`;

export const Block = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	border: ${props => props.selected ? '2px solid yellow' : 'none' };
`;

export const Start = styled.div`
	width: 50px;
	height: 50px;
	background-color: red;
	border: ${props => props.selected ? '2px solid yellow' : 'none' };
`;

export const Finish = styled.div`
	width: 50px;
	height: 50px;
	background-color: green;
	border: ${props => props.selected ? '2px solid yellow' : 'none' };
`;

export const Key = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	border: ${props => props.selected ? '2px solid yellow' : 'none' };
	background-image: url(${images.Key});
	background-size: contain;
	background-position: center;
`;

export const Life = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	border: ${props => props.selected ? '2px solid yellow' : 'none' };
	background-image: url(${images.Life});
	background-size: contain;
	background-position: center;
`;

export const Zip = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	border: ${props => props.selected ? '2px solid yellow' : 'none' };
	background-image: url(${images.Zip});
	background-size: contain;
	background-position: center;
`;

export const Crystal = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	border: ${props => props.selected ? '2px solid yellow' : 'none' };
	background-image: url(${images.Crystal});
	background-size: contain;
	background-position: center;
`;