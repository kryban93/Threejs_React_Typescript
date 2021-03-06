import styled from 'styled-components';
import IcosahedronCanvas from '../../threeElements/IcosahedronCanvas/IcosahedronCanvas';

export default function MainView() {
	return (
		<StyledWrapper>
			<StyledTextWrapper>
				<h1>Hello World,</h1>
				<h2>Checkout my three.js laboratory!</h2>
				<h2>You can find there some of my works</h2>
			</StyledTextWrapper>
			<IcosahedronCanvas />
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-around;
	height: 100vh;
	padding-top: 100px;
	background: linear-gradient(164deg, #3a0d55 44%, #af7527 100%);

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

const StyledTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width 100%;
	color: ${({ theme }) => theme.white}; 
`;
