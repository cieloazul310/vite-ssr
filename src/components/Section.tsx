import * as React from 'react';
import { Box, Container, Heading, type ContainerProps } from '@chakra-ui/react';

type SectionProps = React.PropsWithChildren<{
  id?: string;
  title: string;
}>;

function Section({ children, title, id }: SectionProps) {
  return (
    <Box pt={[2, '64px']} pb={[2, 8]} px={[2, 8]} id={id}>
      <Container
        as="article"
        maxWidth="container.lg"
        borderWidth="4px"
        borderColor="black"
      >
        <Heading as="h2" textAlign="center" py={2}>
          {title}
        </Heading>
        {children}
      </Container>
    </Box>
  );
}

export default Section;
