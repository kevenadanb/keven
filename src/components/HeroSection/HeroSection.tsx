import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ACCENT_GOLD, LIGHT_TEXT, sectionTitleSx } from "../../theme";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import SkillsGrid from "./SkillsGrid";

function scrollToContact() {
  const el = document.getElementById("contato");
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function HeroSection() {
  return (
    <Container
      component="section"
      id="inicio"
      aria-label="Introdução e stack de tecnologias"
      maxWidth="xl"
      sx={{
        mb: { xs: 4, md: 6 },
        background: "linear-gradient(160deg, rgba(27, 38, 59, 0.9), rgba(13, 27, 42, 0.92))",
        border: "1px solid rgba(224, 225, 221, 0.1)",
        borderTop: "1px solid rgba(232, 192, 110, 0.22)",
        borderRadius: "18px",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.28)",
        p: { xs: "1.5rem", sm: "2.5rem", md: "4rem" },
      }}
    >
      <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="flex-start" sx={{ position: "relative" }}>
        {/* Divider vertical decorativo — desktop only */}
        <Box
          aria-hidden="true"
          sx={{
            display: { xs: "none", lg: "block" },
            position: "absolute",
            left: "50%",
            top: "2rem",
            bottom: "2rem",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(232, 192, 110, 0.3), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* Coluna esquerda — Introdução + Sobre */}
        <Grid size={{ xs: 12, lg: 6 }} sx={{ pr: { lg: 4 } }}>
          <ScrollReveal direction="left" delay={80} distance={40}>
          {/* badge-highlight */}
          <Box
            component="span"
            sx={{
              background: "rgba(232, 192, 110, 0.15)",
              color: "rgba(232, 192, 110, 0.9)",
              border: "1px solid rgba(232, 192, 110, 0.4)",
              borderRadius: "99px",
              px: "0.9rem",
              py: "0.45rem",
              fontSize: "0.78rem",
              fontWeight: 600,
              fontFamily: '"Manrope", sans-serif',
              display: "inline-block",
            }}
          >
            Portfólio 2026
          </Box>

          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mt: 2,
              mb: 2,
              lineHeight: 1.2,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            }}
          >
            Olá, bem-vindo(a)!
          </Typography>

          <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, mb: 4, lineHeight: 1.85 }}>
            Engenheiro de Software com experiência em Frontend, Backend e Arquitetura de Sistemas.
            No momento, desenvolve com React.js, Node.js, Supabase/PostgreSQL e agentes de IA, explorando aplicações de inteligência artificial aplicadas à engenharia de software. Perfil autodidata e comprometido com aprendizado contínuo.
          </Typography>

          {/* btn-outline-kali */}
          <Button
            variant="outlined"
            size="large"
            onClick={scrollToContact}
            sx={{
              borderColor: `rgba(224, 225, 221, 0.35)`,
              color: LIGHT_TEXT,
              px: 4,
              py: 1,
              transition: "border-color 220ms ease, background-color 220ms ease, color 220ms ease",
              "&:hover": {
                borderColor: "rgba(224, 225, 221, 0.8)",
                background: "rgba(224, 225, 221, 0.08)",
                color: "#fff",
              },
            }}
          >
            Contato
          </Button>
          </ScrollReveal>
        </Grid>

        {/* Coluna direita — Habilidades */}
        <Grid size={{ xs: 12, lg: 6 }} id="habilidades" sx={{ pl: { lg: 3 } }}>
          <ScrollReveal direction="right" delay={200} distance={40}>
          <Typography
            variant="h5"
            component="h2"
            sx={sectionTitleSx()}
          >
            Stack
          </Typography>
          <SkillsGrid />
          </ScrollReveal>
        </Grid>
      </Grid>

      {/* Seta de scroll */}
      <Box
        aria-hidden="true"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: 3, md: 4 },
          gap: 0,
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateY(0)",  opacity: 0.45 },
            "50%":       { transform: "translateY(9px)", opacity: 1 },
          },
        }}
      >
        {/* Linha vertical acima da seta */}
        <Box
          sx={{
            width: "1px",
            height: { xs: 28, md: 36 },
            background: `linear-gradient(to bottom, transparent, rgba(232, 192, 110, 0.55))`,
            mb: "2px",
            animation: "bounce 2.2s ease-in-out infinite",
          }}
        />
        <KeyboardArrowDownIcon
          sx={{
            fontSize: { xs: 32, md: 38 },
            color: ACCENT_GOLD,
            filter: "drop-shadow(0 0 6px rgba(232, 192, 110, 0.4))",
            animation: "bounce 2.2s ease-in-out infinite",
          }}
        />
      </Box>
    </Container>
  );
}

