import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Text, useColorModeValue } from '@chakra-ui/react';

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

	&:hover img {
		transform: rotate(20deg);
	}
`

const Logo = () => {
	const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`;

	return (
		<Link href='/'>
			<a>
				<LogoBox>
					<Image src={footPrintImg} width={20} height={20} alt='logo'/>
					<Text
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						fontFamily='M PLUS Rounded 1c'
						fontWeight='bold'
						ml={3}
					>
						Léo Ducruet
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo
