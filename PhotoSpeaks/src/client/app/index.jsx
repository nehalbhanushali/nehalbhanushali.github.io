import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Page from './Merge.jsx';



const App = () => (


  <MuiThemeProvider muiTheme={getMuiTheme()}>
   <Page />
  </MuiThemeProvider>
);
 
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

