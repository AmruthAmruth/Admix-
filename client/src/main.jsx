import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'; 
import {Provider} from 'react-redux'
import store from './app/store.js';
import { SnackbarProvider } from 'notistack';
createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
    <App />
   </SnackbarProvider>
  </Provider>
  
)
  