import { extendTheme, baseTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: baseTheme.colors.red,
  },
});

export default theme;
