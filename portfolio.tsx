import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioPage from './src/components/PortfolioPage';
import './index.css';
import { initializeTheme } from './src/utils/theme';

initializeTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>
);
