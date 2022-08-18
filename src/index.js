import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider,
  createTheme,
  //StyledEngineProvider
} from "@mui/material/styles";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./app/store"
import { Provider } from 'react-redux';


const theme = createTheme()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();