// AppTheme.tsx
import React, { createContext, ReactNode, useContext } from "react";
import type { AppColors } from "./AppColors";
import type { AppText } from "./AppText";
import { createText } from "./AppText";

type ThemeType = {
  colors: AppColors;
  text: AppText;
};

const ThemeContext = createContext<ThemeType | null>(null);

export const AppTheme = ({
  colors,
  children,
}: {
  colors: AppColors;
  children: ReactNode;
}) => (
  <ThemeContext.Provider
    value={{
      colors,
      text: createText(colors),
    }}
  >
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("AppTheme not found");
  return theme;
};
