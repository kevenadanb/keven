import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import type { SvgIconComponent } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { ACCENT_GOLD, sectionTitleSx } from "../../theme";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

interface Project {
  icon: SvgIconComponent;
  category: string;
  title: string;
  description: string;
  context: string;
  challenge: string;
  engineering: string;
  tags: string[];
  stack: string[];
}

const PROJECTS: Project[] = [
  {
    icon: AccountBalanceIcon,
    category: "FINANCEIRO",
    title: "Sistema de Cobrança",
    description: "Emissão e gestão de boletos bancários integrados a uma API bancária.",
    context: "Cobrança recorrente com necessidade de confiabilidade e rastreamento de pagamentos.",
    challenge: "A integração com serviços externos pode falhar ou retornar estados inconsistentes.",
    engineering: "Funções serverless isoladas com tratamento de erros e controle de estados por etapa.",
    tags: ["Boletos", "Integração bancária", "Conciliação"],
    stack: ["TypeScript", "Node.js", "Netlify Functions", "Supabase", "PostgreSQL"],
  },
  {
    icon: ConfirmationNumberIcon,
    category: "EVENTOS",
    title: "Plataforma de Eventos",
    description: "Venda de ingressos online com pagamento PIX e controle de lotes.",
    context: "Produtos com eventos gratuitos e pagos, cada compra gerando um ingresso único.",
    challenge: "Garantir que cada pagamento gere exatamente um ingresso válido, sem duplicatas.",
    engineering: "Processamento atômico da compra e tratamento especial para ingressos gratuitos.",
    tags: ["PIX", "QR Code", "Ingressos"],
    stack: ["React", "TypeScript", "MUI", "Supabase"],
  },
  {
    icon: LocalCafeIcon,
    category: "FOOD SERVICE · ESCOLAR",
    title: "Sistema de Cantina",
    description: "Autoatendimento via totem com saldo de responsáveis e restrições alimentares.",
    context: "Cantina escolar com alunos de diferentes restrições e responsáveis financeiros distintos.",
    challenge: "Impedir que alunos com restrições alimentares recebam itens incorretos.",
    engineering: "Validação em todas as camadas do sistema e saldo atualizado em tempo real.",
    tags: ["Totem", "Restrições alimentares", "Saldo"],
    stack: ["React", "TypeScript", "MUI", "Supabase", "PostgreSQL"],
  },
  {
    icon: CalendarMonthIcon,
    category: "SAÚDE",
    title: "Portal de Agendamentos",
    description: "Agendamento de consultas com painel administrativo e confirmação via WhatsApp.",
    context: "Clínica com múltiplos profissionais e comunicação direta com pacientes.",
    challenge: "Confirmar presença pelo WhatsApp sem acionar o chatbot de atendimento.",
    engineering: "Confirmação via webhook com atualização de status e encerramento silencioso do chat.",
    tags: ["Agendamentos", "WhatsApp", "Confirmação automática"],
    stack: ["React", "TypeScript", "MUI", "Supabase", "WhatsApp API"],
  },
];

const BLOCK_LABEL_SX = {
  fontSize: "0.6rem",
  fontWeight: 800,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: ACCENT_GOLD,
  fontFamily: '"Manrope", sans-serif',
  opacity: 0.75,
  mb: 0.75,
  display: "block",
};

function EcosystemBlock({ label, text }: { label: string; text: string }) {
  return (
    <Box
      sx={{
        p: { xs: "1rem", sm: "1.1rem" },
        borderRadius: "8px",
        background: "rgba(13, 27, 42, 0.55)",
        border: "1px solid rgba(224, 225, 221, 0.07)",
        height: "100%",
      }}
    >
      <Typography component="span" sx={BLOCK_LABEL_SX}>
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.88rem",
          color: "rgba(224, 225, 221, 0.6)",
          lineHeight: 1.7,
          fontFamily: '"Manrope", sans-serif',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const [open, setOpen] = useState(false);
  const [pulsing, setPulsing] = useState(index === 0);

  useEffect(() => {
    if (index !== 0) return;
    const timer = setTimeout(() => setPulsing(false), 30_000);
    return () => clearTimeout(timer);
  }, [index]);

  function toggle() {
    setPulsing(false);
    setOpen((prev) => !prev);
  }

  return (
    <ScrollReveal delay={index * 90} distance={30}>
      <Box
        onClick={toggle}
        role="button"
        aria-expanded={open}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggle();
        }}
        sx={{
          cursor: "pointer",
          p: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          borderRadius: "14px",
          background: "linear-gradient(160deg, rgba(27, 38, 59, 0.9), rgba(13, 27, 42, 0.92))",
          border: "1px solid rgba(224, 225, 221, 0.1)",
          borderTop: open && !pulsing
            ? "1px solid rgba(232, 192, 110, 0.45)"
            : "1px solid rgba(232, 192, 110, 0.2)",
          "@keyframes cardPulse": {
            "0%, 100%": { boxShadow: "0 8px 24px rgba(0,0,0,0.2)" },
            "50%": { boxShadow: "0 8px 28px rgba(0,0,0,0.28), 0 0 0 4px rgba(232, 192, 110, 0.28)" },
          },
          boxShadow: pulsing
            ? undefined
            : open ? "0 16px 36px rgba(0, 0, 0, 0.35)" : "0 8px 24px rgba(0, 0, 0, 0.2)",
          animation: pulsing ? "cardPulse 2s ease-in-out infinite" : "none",
          transition: "box-shadow 260ms ease, border-color 260ms ease",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          outline: "none",
          "&:hover": {
            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.38)",
            borderColor: "rgba(232, 192, 110, 0.35)",
          },
          "&:focus-visible": {
            outline: "2px solid rgba(232, 192, 110, 0.6)",
            outlineOffset: "3px",
          },
        }}
      >
        {/* Cabeçalho: ícone + categoria + título + chevron */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "10px",
              background: "rgba(232, 192, 110, 0.1)",
              border: "1px solid rgba(232, 192, 110, 0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              mt: "2px",
            }}
          >
            <Icon sx={{ fontSize: 22, color: ACCENT_GOLD }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              component="span"
              sx={{
                fontSize: "0.6rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(224, 225, 221, 0.35)",
                fontFamily: '"Manrope", sans-serif',
                display: "block",
                mb: 0.4,
              }}
            >
              {project.category}
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                lineHeight: 1.25,
              }}
            >
              {project.title}
            </Typography>
          </Box>
          <ExpandMoreIcon
            sx={{
              color: ACCENT_GOLD,
              opacity: 0.7,
              fontSize: 22,
              flexShrink: 0,
              mt: "12px",
              transition: "transform 280ms cubic-bezier(0.4, 0, 0.2, 1)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </Box>

        {/* Descrição */}
        <Typography
          variant="body2"
          sx={{ color: "rgba(224, 225, 221, 0.75)", fontSize: "0.98rem", lineHeight: 1.75 }}
        >
          {project.description}
        </Typography>

        {/* Chips sempre visíveis */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontSize: "0.72rem",
                height: 22,
                background: "rgba(232, 192, 110, 0.08)",
                color: "rgba(232, 192, 110, 0.7)",
                border: "1px solid rgba(232, 192, 110, 0.2)",
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 600,
              }}
            />
          ))}
          {project.stack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                fontSize: "0.72rem",
                height: 22,
                background: "rgba(224, 225, 221, 0.06)",
                color: "rgba(224, 225, 221, 0.45)",
                border: "1px solid rgba(224, 225, 221, 0.1)",
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        {/* Blocos expandíveis */}
        <Collapse in={open} timeout={300}>
          <Grid container spacing={1.5} sx={{ mt: 0.5 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <EcosystemBlock label="O que é" text={project.context} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <EcosystemBlock label="Problema" text={project.challenge} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <EcosystemBlock label="Solução" text={project.engineering} />
            </Grid>
          </Grid>
        </Collapse>
      </Box>
    </ScrollReveal>
  );
}

export default function ProjectsSection() {
  return (
    <Container
      component="section"
      id="projetos"
      aria-label="Ecossistemas de projetos desenvolvidos"
      maxWidth="xl"
      sx={{ mb: { xs: 4, md: 6 } }}
    >
      <Typography variant="h5" component="h2" sx={sectionTitleSx()}>
        Projetos
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", mb: 5, fontSize: "1rem", lineHeight: 1.75, maxWidth: 680 }}
      >
        Sistemas nos quais mantive e contribuí em ambiente de produto real. Clique em um card para ver mais detalhes.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </Box>
    </Container>
  );
}
