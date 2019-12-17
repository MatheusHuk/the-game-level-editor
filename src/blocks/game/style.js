import styled from 'styled-components';
import * as images from '../../assets/images.js';

export const NoBlock = styled.div`
	width: 50px;
	height: 50px;
	background-color: #000;
`;

export const Block = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
`;

export const Start = styled.div`
	width: 50px;
	height: 50px;
	background-color: red;
`;

export const Finish = styled.div`
	width: 50px;
	height: 50px;
	background-color: green;
`;

export const Key = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	background-image: url(${images.Key});
	background-size: contain;
	background-position: center;
`;

export const Life = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	background-image: url(${images.Life});
	background-size: contain;
	background-position: center;
`;

export const Zip = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	background-image: url(${images.Zip});
	background-size: contain;
	background-position: center;
`;

export const Crystal = styled.div`
	width: 50px;
	height: 50px;
	background-color: #808080;
	background-image: url(${images.Crystal});
	background-size: contain;
	background-position: center;
`;