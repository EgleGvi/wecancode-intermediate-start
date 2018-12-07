import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import Header from './components/header';
import Footer from './components/footer';

import styles from './app.module.scss';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#E91E63',
    }
  },
});

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.app}>
          <Header>
            <Typography variant="h5" className={styles.appTitle}>
              WE CAN CODE Dream Destinations
            </Typography>
          </Header>
          <div className={styles.content}>
            Welcome to your first React WEB application. Here we are going to create a page with most beautiful places to visit.
          </div>
          <Footer>
          </Footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
