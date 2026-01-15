// AppText.ts
import type { AppColors } from "./AppColors";

export type AppText = {
  h1: React.CSSProperties;
  h2: React.CSSProperties;
  body: React.CSSProperties;
  caption: React.CSSProperties;
  disabled: React.CSSProperties;
};

export function createText(colors: AppColors): AppText {
  return {
    h1: { fontSize: 24, fontWeight: 700, color: colors.textPrimary },
    h2: { fontSize: 20, fontWeight: 600, color: colors.textPrimary },
    body: { fontSize: 14, color: colors.textPrimary },
    caption: { fontSize: 12, color: colors.textSecondary },
    disabled: { fontSize: 14, color: colors.textDisabled },
  };
}
