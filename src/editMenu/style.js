import styled from 'styled-components';
import * as images from '../assets/images.js';

export const Edit = styled.div`
	width: 800px;
	height: 90px;
	align-items: center;
	display: flex;
	border: 1px solid white;
`;

export const Titles = styled.div`
	margin-bottom: -1px;
	margin-top: 15px;
	border-top-left-radius: 5pt;
	border-top-right-radius: 5pt;
	width: 800px;
	height: 20px;
	display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: flex-start;
    flex-wrap: nowrap;
`;

export const Bottom = styled.div`
	margin-top: -1px;
	border-bottom-left-radius: 5pt;
	border-bottom-right-radius: 5pt;
	width: 800px;
	height: 20px;
	display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
    flex-wrap: nowrap;
`;

export const Tab = styled.div`
	width: 100px;
	height: 20px;
	background-color: black;
	border-top-left-radius: 5pt;
	border-top-right-radius: 5pt;
	border: 1px solid white;
	border-bottom: ${props => props.selected ? '1px solid black' : '1px solid white'};
	z-index: 999;
	box-sizing: border-box;
	cursor: pointer;
`;

export const BottomTab = styled.div`
	width: 100px;
	height: 20px;
	background-color: black;
	border-bottom-left-radius: 5pt;
	border-bottom-right-radius: 5pt;
	border: 1px solid white;
	border-top: ${props => props.selected ? '1px solid black' : '1px solid white'};
	z-index: 999;
	box-sizing: border-box;
	cursor: pointer;
`;

export const List = styled.div`
	height: 80px;
    width: auto;
	min-width: auto;
	display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: flex-start;
    flex-wrap: nowrap;
`;

export const Export = styled.div`
	
`;

export const Box = styled.div`
	min-width: 70px;
	max-width: 70px;
	min-height: 70px;
	background-color: #000;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	color: white;
	padding: 0 10px 0 10px;
`;

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