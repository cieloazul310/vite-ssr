import * as React from 'react';
import { Box, Flex, Container, Heading, Text } from '@chakra-ui/react';
import Seo from './Seo';
import { usePageContext } from '../renderer/usePageContext';

type LayoutProps = React.PropsWithChildren<{}>;

function Layout({ children }: LayoutProps) {
  const pageContext = usePageContext();
  const title = pageContext.exports?.documentProps?.title;
  const description = pageContext.exports?.documentProps?.description;
  return (
    <>
      <Seo title={title} description={description} />
      <Box p={2}>
        <Flex
          rounded="2xl"
          bgGradient="linear(to-r,  gray.200, cyan.300)"
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
