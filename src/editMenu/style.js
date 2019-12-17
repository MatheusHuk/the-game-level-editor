import styled from 'styled-components';

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
	font-size: 15px;
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
	font-size: 15px;
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
	height: 80px;
    width: 800px;
	display: flex;
    align-items: center;
    flex-wrap: wrap;
	text-align: center;
	justify-content: center;
`;

export const ExportBox = styled.div`
	height: 80px;
    width: 200px;
	display: flex;
    align-items: center;
    flex-wrap: wrap;
	text-align: center;
	justify-content: center;
`;

export const ExportButton = styled.div`
	width: 100px;
	height: 20px;
	font-size: 15px;
	background-color: black;
	border-radius: 5pt;
	border: 1px solid white;
	box-sizing: border-box;
	cursor: pointer;
	
	:hover{
		border: 1px solid red;
		color: red;
	}
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