import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppTheme } from "./ui/theme/AppThemeContext.tsx";
import { Colors } from './ui/theme/AppColors.ts';


const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AppTheme colors={Colors.dark}>
        <App />
      </AppTheme>

    </StrictMode>,
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
