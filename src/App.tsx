import Box from "@mui/material/Box";
import ContactSection from "./components/ContactSection/ContactSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";

export default function App() {
  return (
    <>
      {/* Skip link — acessibilidade */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          top: "-60px",
          zIndex: 9999,
          background: "background.paper",
          color: "text.primary",
          border: "1px solid var(--gold-solid)",
          borderRadius: "8px",
          px: 3,
          py: 1,
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 600,
          fontSize: "0.95rem",
          textDecoration: "none",
          transition: "top 180ms ease",
          "&:focus": { top: "8px" },
        }}
      >
        Pular para o conteúdo principal
      </Box>

      <Navbar />
      <Box
        component="main"
        id="main-content"
        sx={{
          pt: { xs: "74px", sm: "86px", md: "110px" },
          pb: { xs: 6, sm: 8, md: 12 },
        }}
      >
        <ScrollReveal threshold={0.05}>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <ExperienceSection />
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <ContactSection />
        </ScrollReveal>
      </Box>
    </>
  );
}
