import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import Box from '@mui/material/Box';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Box
        sx={{
          height: '400%',
          width: '100%',
          display: 'inline-block',
          p: 5,
          mx: 0,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
         
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
      <App />
      </Box >
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

