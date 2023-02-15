import * as React from 'react';
import { Box, Flex, Container, Square, Image, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import NavItem from '../components/NavItem';
import mdxComponents from '../components/mdxComponents';
import Info from '../mdx/info.mdx';
import Comments from '../mdx/comments.mdx';
import Media from '../mdx/media.mdx';
import artwork from '../assets/artwork.png';

export const documentProps = {
  // This title and description will override the defaults
  title: 'Sarkara',
  description: '1st Album Sarkara 2023/02/27 Release!',
};

function Page() {
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box>
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Square size={['90vw', '80vh']}>
              <Image src={artwork} alt="Sarkara" objectFit="cover" />
            </Square>
          </Box>
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            display="flex"
            justifyContent="center"
          >
            <Heading as="span" size="xl" fontWeight="extrabold">
              2023/02/27 Release!
            </Heading>
          </Box>
        </Box>
      </Flex>
      <Flex
        as="nav"
        flexDirection={['column', 'row']}
        display="flex"
        position={['inherit', 'sticky']}
        top={0}
        height={['auto', '64px']}
        bgColor="white"
        alignItems="center"
        justifyContent="center"
        gap={[2, 4, 8]}
        zIndex="sticky"
      >
        <NavItem href="#info">Info</NavItem>
        <NavItem href="#comments">Comments</NavItem>
        <NavItem href="#media">Media</NavItem>
        <NavItem href="#">Buy</NavItem>
      </Flex>
      <Section title="Info" id="info">
        <Flex direction={['column', 'row']}>
          <Box p={[2, 4]} flexShrink={1}>
            <Square size={['300px', '240px', '360px']}>
              <Image src={artwork} alt="Sarkara" objectFit="cover" />
            </Square>
          </Box>
          <Box flexGrow={1} p={[2, 4]}>
            <Info components={mdxComponents} />
          </Box>
        </Flex>
      </Section>
      <Section title="Commnets" id="comments">
        <Container maxWidth="container.md">
          <Comments components={mdxComponents} />
        </Container>
      </Section>
      <Section title="Media" id="media">
        <Container maxWidth="container.md">
          <Media components={mdxComponents} />
        </Container>
      </Section>
    </>
  );
}

export { Page };
