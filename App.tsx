import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/constants/theme';
import {VoteScreen} from './src/screens/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <VoteScreen />
    </ThemeProvider>
  );
};

export default App;
