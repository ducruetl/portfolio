import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
		<Container>
			<Box borderRadius='lg' bg='red' p={3} mb={6} color='white' align='center'>
				Bonjour, je m&apos;appelle Léo Ducruet et je suis étudiant en BUT Informatique à Grenoble.
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
						Léo Ducruet
					</Heading>
					<p>Etudiant en Informatique</p>
				</Box>
			</Box>
		</Container>
	)
}

export default Page
