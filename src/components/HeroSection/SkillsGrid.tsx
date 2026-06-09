import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { ACCENT_GOLD } from "../../theme";

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  label: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Material UI", icon: "https://skillicons.dev/icons?i=mui" },
      { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
      { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
    ],
  },
  {
    label: "Dados & Plataforma",
    skills: [
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    ],
  },
  {
    label: "IA · Qualidade · Entrega",
    skills: [
      { name: "Claude AI", icon: "https://cdn.simpleicons.org/claude/E0E1DD" },
      { name: "Vitest", icon: "https://skillicons.dev/icons?i=vitest" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    ],
  },
];

function SkillIcon({ skill }: { skill: SkillItem }) {
  return (
    <Tooltip title={skill.name} arrow placement="top">
      <Paper
        elevation={0}
        sx={{
          display: "grid",
          placeItems: "center",
          width: { xs: 56, sm: 64 },
          height: { xs: 56, sm: 64 },
          borderRadius: "10px",
          background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
          border: "1px solid rgba(224, 225, 221, 0.14)",
          cursor: "default",
          flexShrink: 0,
          transition: "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
          "&:hover": {
            transform: "translateY(-3px)",
            borderColor: "rgba(232, 192, 110, 0.5)",
            boxShadow: "0 8px 24px rgba(232, 192, 110, 0.14)",
          },
        }}
      >
        <Box
          component="img"
          src={skill.icon}
          alt={skill.name}
          loading="lazy"
          sx={{ width: { xs: 32, sm: 38 }, height: { xs: 32, sm: 38 }, display: "block" }}
        />
      </Paper>
    </Tooltip>
  );
}

export default function SkillsGrid() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {SKILL_CATEGORIES.map((category) => (
        <Box key={category.label}>
          {/* Label da categoria */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
            <Typography
              component="span"
              sx={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: `rgba(232, 192, 110, 0.65)`,
                fontFamily: '"Manrope", sans-serif',
                whiteSpace: "nowrap",
              }}
            >
              {category.label}
            </Typography>
            <Box
              sx={{
                flex: 1,
                height: "1px",
                background: `linear-gradient(90deg, rgba(232, 192, 110, 0.25), transparent)`,
              }}
            />
          </Box>

          {/* Ícones da categoria */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {category.skills.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

