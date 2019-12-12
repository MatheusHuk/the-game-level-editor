import styled from 'styled-components';

export const Edit = styled.div`
	margin-top: 25px;
	width: 800px;
	height: 90px;
	border: 5px solid yellow;
	align-items: center;
	display: flex;
`;

export const Titles = styled.div`
	width: 800px;
	height: 20px;
	background-color: black;
`;

export const List = styled.div`
	height: 70px;
    width: auto;
	min-width: auto;
	display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: flex-start;
    flex-wrap: nowrap;
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