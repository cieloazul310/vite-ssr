import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';

function NavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Flex
      as="a"
      alignItems="center"
      justifyContent="center"
      href={href}
      width={['90%', '120px', '160px']}
    >
      <Flex
        borderWidth="4px"
        borderColor="black"
        p={2}
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        role="group"
      >
        <Text
          fontWeight="bold"
          fontSize="lg"
          _groupHover={{ color: 'red.600' }}
        >
          {children}
        </Text>
      </Flex>
    </Flex>
  );
}

export default NavItem;
