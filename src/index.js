import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './style.css';
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import * as PXBThemes from '@pxblue/themes/react';
require('typeface-noto-sans');
require('typeface-open-sans');

ReactDOM.render(
 <MuiThemeProvider theme={createMuiTheme(Object.assign(PXBThemes.blue, {
   typography: {
     fontFamily: '"Open Sans", "Noto Sans", Helvetica, sans-serif',
     useNextVariants: true
   }
   }))}>
      <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);