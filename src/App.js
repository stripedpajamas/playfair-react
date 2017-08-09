import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import { grey, pink } from 'material-ui/colors';
import 'typeface-roboto';
import store from './store';
import PlayfairApp from './components/PlayfairApp';

const theme = createMuiTheme({
  palette: createPalette({
    primary: pink,
    accent: grey,
    error: grey
  }),
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <PlayfairApp />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
