import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Site } from './screens/Site';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Site />
  </StrictMode>
);
