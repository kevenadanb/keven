import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import avatarImg from "../../assets/images/avatar.jpeg";
import { sectionTitleSx } from "../../theme";

export default function AboutSection() {
  return (
    <Container
      component="section"
      id="sobre"
      maxWidth="lg"
      sx={{ mb: { xs: 4, md: 5 } }}
    >
      <Box
        sx={{
          p: { xs: "1.25rem", sm: "2rem", md: "2.5rem" },
          borderRadius: "12px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(224, 225, 221, 0.1)",
          borderTop: "1px solid rgba(232, 192, 110, 0.18)",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(120px, clamp(120px, 24vw, 250px)) 1fr",
          },
          gap: { xs: "1rem", sm: "clamp(1rem, 2.5vw, 2rem)" },
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={avatarImg}
          alt="Foto de Keven A. Bezerra"
          loading="lazy"
          sx={{
            width: { xs: "clamp(128px, 50vw, 220px)", sm: "100%" },
            maxWidth: { xs: "100%", sm: "250px" },
            aspectRatio: "1 / 1",
            height: "auto",
            borderRadius: 0,
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.25)",
            mx: { xs: "auto", sm: 0 },
          }}
        />
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              ...sectionTitleSx(),
              "::after": {
                ...sectionTitleSx()["::after"],
                mx: { xs: "auto", sm: 0 },
              },
            }}
          >
            Sobre Mim
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
            Sou desenvolvedor fullstack com foco em aplicações escaláveis, integrações robustas e experiência do
            usuário orientada a resultados. Atuo na construção de produtos que unem qualidade técnica,
            previsibilidade de entrega e impacto de negócio.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
