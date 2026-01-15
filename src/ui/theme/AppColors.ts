// AppColors.ts
export type AppColors = {
  bgPrimary: string;
  bgSecondary: string;
  surface: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  accent: string;
  accentHover: string;
  error: string;
};

export const Colors = {
  light: {
    bgPrimary: "#F2F2F7",
    bgSecondary: "#FFFFFF",
    surface: "#F9F9FB",
    border: "#D1D1D6",
    textPrimary: "#000000",
    textSecondary: "#3C3C43",
    textDisabled: "#AEAEB2",
    accent: "#007AFF",
    accentHover: "#005FCC",
    error: "#FF3B30",
  },

  dark: {
    bgPrimary: "#000000",
    bgSecondary: "#1C1C1E",
    surface: "#2C2C2E",
    border: "#38383A",
    textPrimary: "#FFFFFF",
    textSecondary: "#EBEBF5",
    textDisabled: "#8E8E93",
    accent: "#15C866",
    accentHover: "#15C866",
    error: "#FF453A",
  },

  /** 🎉 TẾT / HAPPY NEW YEAR */
  tet: {
    bgPrimary: "#FFFFFF",        // nền hồng nhạt
    bgSecondary: "#991B1B",      // đỏ tết
    surface: "#991B1B",          // thẻ / card
    border: "#FECACA",
    textPrimary: "#FFFFFF",      // đỏ sẫm
    textSecondary: "#FFFFFF",
    textDisabled: "#FCA5A5",
    accent: "#D4AF37",           // vàng kim
    accentHover: "#FFD700",
    error: "#DC2626",
  },
} as const;
