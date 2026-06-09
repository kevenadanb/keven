import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const KALI_BLUE = "#0D1B2A";
export const SECONDARY_BLUE = "#1A237E";
export const CONTRAST_BLUE = "#1B263B";
export const LIGHT_TEXT = "#E0E1DD";
export const ACCENT_RED = "#C1121F";
export const ACCENT_GOLD = "#E8C06E";

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: SECONDARY_BLUE,
      contrastText: LIGHT_TEXT,
    },
    error: {
      main: ACCENT_RED,
    },
    background: {
      default: KALI_BLUE,
      paper: CONTRAST_BLUE,
    },
    text: {
      primary: LIGHT_TEXT,
      secondary: "rgba(224, 225, 221, 0.65)",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: { fontFamily: '"Poppins", "Segoe UI", sans-serif', letterSpacing: "-0.02em", fontWeight: 800 },
    h2: { fontFamily: '"Poppins", "Segoe UI", sans-serif', letterSpacing: "-0.02em", fontWeight: 700 },
    h3: {
      fontFamily: '"Poppins", "Segoe UI", sans-serif',
      letterSpacing: "-0.02em",
      fontWeight: 700,
      fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
    },
    h4: { fontFamily: '"Poppins", "Segoe UI", sans-serif', letterSpacing: "-0.02em" },
    h5: { fontFamily: '"Poppins", "Segoe UI", sans-serif', letterSpacing: "-0.02em" },
    h6: { fontFamily: '"Poppins", "Segoe UI", sans-serif', letterSpacing: "-0.02em" },
    body1: { fontSize: "1.05rem", lineHeight: 1.75 },
    body2: { fontSize: "0.95rem", lineHeight: 1.7 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            radial-gradient(1000px 500px at 15% 5%, rgba(26, 35, 126, 0.45), transparent),
            radial-gradient(800px 400px at 95% 95%, rgba(232, 192, 110, 0.06), transparent),
            radial-gradient(600px 300px at 60% 55%, rgba(232, 192, 110, 0.05), transparent),
            ${KALI_BLUE}
          `,
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
        "*:focus-visible": {
          outline: `2px solid rgba(232, 192, 110, 0.7)`,
          outlineOffset: "3px",
          borderRadius: "4px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: '"Manrope", "Segoe UI", sans-serif',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(224, 225, 221, 0.2)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(224, 225, 221, 0.4)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: ACCENT_GOLD,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: ACCENT_GOLD,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(13, 27, 42, 0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(232, 192, 110, 0.12)",
          boxShadow: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "rgba(13, 27, 42, 0.97)",
          backdropFilter: "blur(12px)",
        },
      },
    },
  },
});

/** Estilo reutilizável para section-title (replica o ::after gradient do original) */
export const sectionTitleSx = (centered = false) =>
  ({
    fontFamily: '"Poppins", "Segoe UI", sans-serif',
    fontWeight: 700,
    fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
    mb: "1rem",
    "::after": {
      content: '""',
      display: "block",
      width: "44px",
      height: "2px",
      mt: "0.5rem",
      background: `linear-gradient(90deg, ${ACCENT_GOLD}, rgba(232, 192, 110, 0))`,
      borderRadius: "2px",
      ...(centered && { mx: "auto" }),
    },
  }) as const;

const theme = responsiveFontSizes(baseTheme);
export default theme;
