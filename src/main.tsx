import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
);
