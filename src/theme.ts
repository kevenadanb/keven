import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const KALI_BLUE = "#0D1B2A";
export const SECONDARY_BLUE = "#1A237E";
export const CONTRAST_BLUE = "#1B263B";
/** Texto claro — cor exata do parágrafo do Hero escuro no Figma (rgb(238, 243, 251)) */
export const LIGHT_TEXT = "#EFF3FB";
export const ACCENT_RED = "#C1121F";
/** Dourado sólido — tom central do gradiente "Gold Linear" escuro do Figma (rgb(191, 132, 26)) */
export const ACCENT_GOLD = "#BF841A";
/** Fundo base — replica o bg-[#050607] do frame "Home Full Screen Style" no Figma */
export const PAGE_BG_DARK = "#050607";

/** Gradiente dourado do botão preenchido/outline — replica o "Gold Linear" do Figma */
const GOLD_GRADIENT = "linear-gradient(135deg, #FFE5A1 5%, #BF841A 50%, #FFCD74 95%)";
/** Borda do botão outline dourado do Figma */
const GOLD_OUTLINE_BORDER = "#8FA8FF";

/**
 * Azul suave — a mesma família de cor do glow de fundo e da borda do botão outline do Figma
 * (#8FA8FF), usada como par "calmo" do dourado (psicologia das cores: azul pastel + amarelo
 * vibrante = confiança e otimismo). Reservado para elementos informativos/secundários; o
 * dourado fica exclusivo para marca, CTA e estado "atual", para não perder força de destaque.
 */
const SOFT_BLUE = "#8FA8FF";

const GOLD_RGB = "191, 132, 26";
const FG_RGB = "238, 243, 251";
const SOFT_RGB = "143, 168, 255";
// Cards herdam os próprios tons do brilho de fundo do Figma (#193053 → #0F1218), não um azul genérico
const CARD_1_RGB = "25, 48, 83";
const CARD_2_RGB = "15, 18, 24";
const TEXT_SECONDARY = "rgba(238, 243, 251, 0.65)";
// Réplica dos dois brilhos radiais desfocados (#3C6380 → #193053 → transparente) do fundo do Figma
const BODY_GRADIENT = `
  radial-gradient(900px 720px at 6% 92%, rgba(60, 99, 128, 0.4), transparent 60%),
  radial-gradient(820px 660px at 97% 4%, rgba(60, 99, 128, 0.42), transparent 58%),
  radial-gradient(700px 560px at 55% 45%, rgba(25, 48, 83, 0.22), transparent 60%),
  ${PAGE_BG_DARK}
`;

export function buildTheme() {
  const baseTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: SECONDARY_BLUE,
        contrastText: LIGHT_TEXT,
      },
      secondary: {
        main: ACCENT_GOLD,
        contrastText: "#0A0D11",
      },
      error: {
        main: ACCENT_RED,
      },
      background: {
        default: PAGE_BG_DARK,
        paper: CONTRAST_BLUE,
      },
      text: {
        primary: LIGHT_TEXT,
        secondary: TEXT_SECONDARY,
      },
    },
    typography: {
      fontSize: 16,
      fontFamily: '"Montserrat", "Segoe UI", sans-serif',
      h1: { fontFamily: '"Cinzel", "Segoe UI", serif', letterSpacing: "-0.01em", fontWeight: 700 },
      h2: { fontFamily: '"Cinzel", "Segoe UI", serif', letterSpacing: "-0.01em", fontWeight: 700 },
      h3: {
        fontFamily: '"Cinzel", "Segoe UI", serif',
        letterSpacing: "-0.01em",
        fontWeight: 700,
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
      },
      h4: { fontFamily: '"Cinzel", "Segoe UI", serif', letterSpacing: "-0.01em" },
      h5: { fontFamily: '"Cinzel", "Segoe UI", serif', letterSpacing: "-0.01em" },
      h6: { fontFamily: '"Cinzel", "Segoe UI", serif', letterSpacing: "-0.01em" },
      body1: { fontSize: "1.05rem", lineHeight: 1.75 },
      body2: { fontSize: "0.95rem", lineHeight: 1.7 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root": {
            "--fg-rgb": FG_RGB,
            "--gold-rgb": GOLD_RGB,
            "--gold-solid": ACCENT_GOLD,
            "--gold-gradient": GOLD_GRADIENT,
            "--soft-rgb": SOFT_RGB,
            "--soft-solid": SOFT_BLUE,
            "--card-1-rgb": CARD_1_RGB,
            "--card-2-rgb": CARD_2_RGB,
          },
          body: {
            background: BODY_GRADIENT,
            backgroundAttachment: "fixed",
            minHeight: "100vh",
          },
          "*:focus-visible": {
            outline: `2px solid rgba(${GOLD_RGB}, 0.7)`,
            outlineOffset: "3px",
            borderRadius: "4px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontFamily: '"Montserrat", "Segoe UI", sans-serif',
            fontWeight: 600,
            borderRadius: 8,
          },
          containedSecondary: {
            backgroundImage: GOLD_GRADIENT,
            color: "#0A0D11",
            border: "1px solid #FFDC8F",
            borderRadius: 5,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            minHeight: 50,
            boxShadow: "none",
            "&:hover": {
              backgroundImage: GOLD_GRADIENT,
              filter: "brightness(1.06)",
              boxShadow: `0 10px 26px rgba(${GOLD_RGB}, 0.3)`,
            },
            "&.Mui-disabled": {
              backgroundImage: "none",
              background: `rgba(${GOLD_RGB}, 0.25)`,
              color: TEXT_SECONDARY,
            },
          },
          outlinedSecondary: {
            border: `1px solid ${GOLD_OUTLINE_BORDER}`,
            borderRadius: 0,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            minHeight: 54,
            background: "transparent",
            backgroundImage: GOLD_GRADIENT,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            "&:hover": {
              backgroundImage: GOLD_GRADIENT,
              WebkitBackgroundClip: "border-box",
              backgroundClip: "border-box",
              WebkitTextFillColor: "#0A0D11",
              color: "#0A0D11",
              borderColor: "transparent",
            },
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
              borderColor: `rgba(${FG_RGB}, 0.2)`,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: `rgba(${FG_RGB}, 0.4)`,
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
            background: `rgba(${CARD_2_RGB}, 0.88)`,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderBottom: `1px solid rgba(${GOLD_RGB}, 0.12)`,
            boxShadow: "none",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: `rgba(${CARD_2_RGB}, 0.97)`,
            backdropFilter: "blur(12px)",
          },
        },
      },
    },
  });

  return responsiveFontSizes(baseTheme);
}

/** Texto em gradiente dourado — replica o preenchimento de texto usado nos títulos do Figma (Hero e "Section Title") */
export const goldTextSx = {
  backgroundImage: "var(--gold-gradient)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

/** Estilo reutilizável para section-title — replica o componente "Section Title" do Figma (texto em gradiente dourado, uppercase) */
export const sectionTitleSx = (centered = false) =>
  ({
    ...goldTextSx,
    fontFamily: '"Montserrat", "Segoe UI", sans-serif',
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
    mb: "1rem",
    "::after": {
      content: '""',
      display: "block",
      width: "44px",
      height: "2px",
      mt: "0.5rem",
      background: "linear-gradient(90deg, rgba(var(--gold-rgb), 1), rgba(var(--gold-rgb), 0))",
      borderRadius: "2px",
      ...(centered && { mx: "auto" }),
    },
  }) as const;

const theme = buildTheme();
export default theme;
