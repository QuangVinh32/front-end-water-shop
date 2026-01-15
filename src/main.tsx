import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Colors } from "./ui/theme/AppColors";
import { AppTheme } from './ui/theme/AppThemeContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AppTheme colors={Colors.tet}>
        <App />
      </AppTheme>

    </StrictMode>,
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
