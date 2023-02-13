import * as React from 'react';
import { Box, Flex, Container, Heading, Text } from '@chakra-ui/react';

type LayoutProps = React.PropsWithChildren<{
  title: string;
  description?: string;
}>;

function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Box p={2}>
        <Flex
          rounded="2xl"
          bgGradient="linear(to-r, cyan.300, gray.100)"
          height="50vh"
          flexDirection="column"
          justifyContent="center"
        >
          <Container maxWidth="container.lg">
            <Heading as="h1">{title}</Heading>
            {description ? <Text>{description}</Text> : null}
          </Container>
        </Flex>
      </Box>
      <Container maxWidth="container.lg">{children}</Container>
    </>
  );
}

export default Layout;
