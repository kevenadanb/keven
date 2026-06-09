import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ACCENT_GOLD, sectionTitleSx } from "../../theme";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

interface Experience {
  company: string;
  location: string;
  role: string;
  summary: string;
  stack: string[];
  highlights: string[];
  context: string;
  current?: boolean;
}

const EXPERIENCES: Experience[] = [
  {
    company: "IS Integrando Soluções",
    location: "Home-Office",
    role: "Desenvolvedor Full Stack · React.js / Node.js / Supabase",
    summary:
      "Desenvolvimento de sistemas web modernos, integrações com banco de dados e automações com agentes de IA em ambiente de produto com múltiplos projetos simultâneos.",
    stack: ["React.js", "TypeScript", "Supabase", "PostgreSQL", "Node.js", "Express.js", "MCP / IA"],
    highlights: [
      "Desenvolvimento de aplicações Web com React.js + TypeScript",
      "Banco de dados relacionais com Supabase / PostgreSQL",
      "Backend RESTful Serverless com Node.js + Express.js + TypeScript",
      "Desenvolvimento de Agentes de IA, MCPs, Skills, instructions e prompts",
    ],
    context: "PRODUTO ATIVO · EVOLUÇÃO DE STACK",
    current: true,
  },
  {
    company: "Desenvolvedor Web",
    location: "Freelance",
    role: "Front-end e Full Stack · React.js / Node.js / Supabase / PostgreSQL",
    summary:
      "Desenvolvimento de sites e landing pages para infoprodutos, com foco em conversão, experiência do usuário e suporte técnico direto ao cliente.",
    stack: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Node.js", "Supabase"],
    highlights: [
      "Desenvolvimento de sites e landing pages para infoprodutos",
      "Criação de front-end utilizando HTML, CSS, JavaScript e Bootstrap",
      "Suporte ao cliente na escolha de hospedagem e configurações técnicas",
    ],
    context: "DESENVOLVIMENTO WEB · PROJETOS INDEPENDENTES",
    current: false,
  },
  {
    company: "Dataprev",
    location: "Home-Office e Presencial",
    role: "Desenvolvedor Backend · Java / Spring Boot",
    summary:
      "Sustentação e evolução de sistemas backend em ambiente corporativo de alta criticidade, com foco em diagnóstico, rastreabilidade e documentação técnica.",
    stack: ["Java", "Spring Boot", "SQL Server", "Docker", "JUnit", "GitLab", "Apache Maven", "Postman"],
    highlights: [
      "Identificação e correção de bugs em sistemas em produção",
      "Implementação de melhorias e novas funcionalidades",
      "Elaboração de documentação técnica",
    ],
    context: "AMBIENTE CORPORATIVO · BACKEND CRÍTICO",
    current: false,
  },
];

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <Box
      sx={{
        p: { xs: "1.5rem", sm: "2.5rem" },
        borderRadius: "12px",
        background: "linear-gradient(160deg, rgba(27, 38, 59, 0.9), rgba(13, 27, 42, 0.92))",
        border: "1px solid rgba(224, 225, 221, 0.1)",
        borderLeft: exp.current
          ? `3px solid ${ACCENT_GOLD}`
          : "1px solid rgba(224, 225, 221, 0.1)",
        borderTop: "1px solid rgba(232, 192, 110, 0.18)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        transition: "box-shadow 220ms ease",
        "&:hover": {
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.32)",
        },
      }}
    >
      {/* Cabeçalho: empresa + localização + badge atual */}
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.5, mb: 0.5 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
          }}
        >
          {exp.company}
        </Typography>

        <Typography
          component="span"
          sx={{
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "rgba(224, 225, 221, 0.45)",
            textTransform: "uppercase",
            fontFamily: '"Manrope", sans-serif',
          }}
        >
          · {exp.location}
        </Typography>

        {exp.current && (
          <Box
            component="span"
            sx={{
              background: "rgba(232, 192, 110, 0.15)",
              color: ACCENT_GOLD,
              border: "1px solid rgba(232, 192, 110, 0.4)",
              borderRadius: "99px",
              px: "0.65rem",
              py: "0.2rem",
              fontSize: "0.66rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: '"Manrope", sans-serif',
            }}
          >
            ATUAL
          </Box>
        )}
      </Box>

      {/* Cargo */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(224, 225, 221, 0.6)",
          fontSize: "0.88rem",
          fontStyle: "italic",
          mb: 1.5,
          fontFamily: '"Manrope", sans-serif',
        }}
      >
        {exp.role}
      </Typography>

      {/* Resumo */}
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", lineHeight: 1.75, mb: 2.5, fontSize: "0.95rem" }}
      >
        {exp.summary}
      </Typography>

      {/* Stack de tecnologias */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
        {exp.stack.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size="small"
            sx={{
              background: "rgba(232, 192, 110, 0.08)",
              color: "rgba(232, 192, 110, 0.85)",
              border: "1px solid rgba(232, 192, 110, 0.2)",
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 600,
              fontSize: "0.72rem",
              height: 24,
              "& .MuiChip-label": { px: "0.6rem" },
            }}
          />
        ))}
      </Box>

      {/* Atividades */}
      <Box component="ul" sx={{ m: 0, pl: "1.25rem", mb: 2.5 }}>
        {exp.highlights.map((item) => (
          <Box
            component="li"
            key={item}
            sx={{
              color: "text.secondary",
              fontSize: "1rem",
              lineHeight: 1.75,
              mb: 0.5,
              fontFamily: '"Manrope", sans-serif',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>

      {/* Badge de contexto */}
      <Box sx={{ borderTop: "1px solid rgba(224, 225, 221, 0.08)", pt: 1.5 }}>
        <Typography
          component="span"
          sx={{
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "rgba(224, 225, 221, 0.3)",
            textTransform: "uppercase",
            fontFamily: '"Manrope", sans-serif',
          }}
        >
          {exp.context}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ExperienceSection() {
  return (
    <Container
      component="section"
      id="experiencias"
      aria-label="Experiência profissional"
      maxWidth="xl"
      sx={{ mb: { xs: 4, md: 6 } }}
    >
      <Typography variant="h5" component="h2" sx={sectionTitleSx()}>
        Experiência Profissional
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", mb: 4, fontSize: "1rem", lineHeight: 1.75 }}
      >
        Trajetória construída em produto, sustentação e evolução real de stack.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        {EXPERIENCES.map((exp, i) => (
          <ScrollReveal key={exp.company} delay={i * 120} distance={28}>
            <ExperienceCard exp={exp} />
          </ScrollReveal>
        ))}
      </Box>
    </Container>
  );
}
