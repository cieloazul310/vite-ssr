import * as React from 'react';
import { Box, Flex, Container, Square, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import mdxComponents from '../../components/mdxComponents';
import Info from '../../components/mdx/info.mdx';
import Comments from '../../components/mdx/comments.mdx';

function NavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Flex as="a" py={[2, 4]} alignItems="center" justifyContent="center" href={href}>
      <Flex
        borderWidth="4px"
        borderColor="black"
        p={2}
        alignItems="center"
        justifyContent="center"
        minWidth="100px"
        role="group"
      >
        <Text
          fontWeight="bold"
          fontSize="lg"
          fontStyle="italic"
          _groupHover={{ color: 'pink.400' }}
        >
          {children}
        </Text>
      </Flex>
    </Flex>
  );
}

function Page() {
  return (
    <>
      <Flex
        height="100vh"
        bgGradient="radial(white, gray.50)"
        alignItems="center"
        justifyContent="center"
      >
        <Box borderWidth="8px" borderColor="black" p={8}>
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Heading as="h1" size="4xl" fontStyle="italic">
              Heading
            </Heading>
          </Box>
        </Box>
      </Flex>
      <Flex
        as="nav"
        position="sticky"
        top={0}
        height="64px"
        bgColor="white"
        alignItems="center"
        justifyContent="center"
        gap={[4, 8]}
        zIndex="sticky"
      >
        <NavItem href="#info">Info</NavItem>
        <NavItem href="#comments">Comments</NavItem>
        <NavItem href="#media">Media</NavItem>
        <NavItem href="#">Buy</NavItem>
      </Flex>
      <Box pt="64px" pb={[2, 8]} px={[2, 8]} id="info">
        <Container
          as="article"
          maxWidth="container.lg"
          borderWidth="4px"
          borderColor="black"
        >
          <Heading as="h2" fontStyle="italic" textAlign="center">
            Info
          </Heading>
          <Flex direction={['column', 'row']}>
            <Box p={[2, 4]} flexShrink={1}>
              <Square size={['300px', '240px', '360px']} bg="gray.400" />
            </Box>
            <Box flexGrow={1} p={[2, 4]}>
              <Info components={mdxComponents} />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box pt="64px" pb={[2, 8]} px={[2, 8]} id="comments">
        <Container
          as="article"
          maxWidth="container.lg"
          borderWidth="4px"
          borderColor="black"
        >
          <Heading as="h2" fontStyle="italic" textAlign="center">
            Comments
          </Heading>
          <Comments components={mdxComponents} />
        </Container>
      </Box>
      <Box pt="64px" pb={[2, 8]} px={[2, 8]} id="media">
        <Container
          as="article"
          maxWidth="container.lg"
          borderWidth="4px"
          borderColor="black"
        >
          <Heading as="h2" fontStyle="italic" textAlign="center">
            Media
          </Heading>
        </Container>
      </Box>
    </>
  );
}

export { Page };

export const documentProps = {
  // This title and description will override the defaults
  title: '水戸觀梅',
  description: '大町桂月',
};
