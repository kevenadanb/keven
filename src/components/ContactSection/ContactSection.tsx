import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { sectionTitleSx } from "../../theme";
import ContactForm from "./ContactForm";
import { useContactForm } from "./useContactForm";

interface SocialLink {
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
  unavailable?: boolean;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/keven-adan-bezerra-7a0808210",
    icon: "https://skillicons.dev/icons?i=linkedin",
    ariaLabel: "Abrir perfil no LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/kevenadanb",
    icon: "https://skillicons.dev/icons?i=github",
    ariaLabel: "Abrir perfil no GitHub",
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: "https://cdn.simpleicons.org/whatsapp/25D366",
    ariaLabel: "WhatsApp indisponível no momento",
    unavailable: true,
  },
];

export default function ContactSection() {
  const { formRef, values, errors, isSubmitting, feedback, handleChange, handleSubmit } =
    useContactForm();

  return (
    <Container
      component="section"
      id="contato"
      aria-label="Formulário de contato"
      maxWidth="xl"
      sx={{ pb: 6 }}
    >
      <Box
        sx={{
          p: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
          borderRadius: "12px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(224, 225, 221, 0.1)",
          borderTop: `1px solid rgba(232, 192, 110, 0.18)`,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={sectionTitleSx()}
        >
          Contato
        </Typography>
        <Typography variant="body1" sx={{ mt: 1.5, mb: 3, color: "text.secondary" }}>
          Envie uma mensagem para iniciarmos uma conversa sobre seu projeto.
        </Typography>

        {/* Links sociais */}
        <Box
          component="nav"
          aria-label="Redes sociais"
          sx={{ display: "flex", gap: "0.75rem", mb: 4 }}
        >
          {SOCIAL_LINKS.map((social) => (
            <Tooltip
              key={social.name}
              title={social.unavailable ? "Indisponível no momento" : ""}
              placement="top"
              arrow
            >
              <Box
                component={social.unavailable ? "span" : "a"}
                {...(!social.unavailable && {
                  href: social.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                aria-label={social.ariaLabel}
                aria-disabled={social.unavailable}
                sx={{
                  width: { xs: "44px", sm: "54px" },
                  height: { xs: "44px", sm: "54px" },
                  border: "1px solid rgba(224, 225, 221, 0.18)",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.03)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: social.unavailable ? "not-allowed" : "pointer",
                  opacity: social.unavailable ? 0.38 : 1,
                  transition: "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                  ...(!social.unavailable && {
                    "&:hover, &:focus-visible": {
                      transform: "translateY(-2px)",
                      borderColor: "rgba(232, 192, 110, 0.5)",
                      boxShadow: "0 8px 22px rgba(232, 192, 110, 0.14)",
                    },
                    "&:focus-visible": {
                      outline: "2px solid rgba(232, 192, 110, 0.55)",
                      outlineOffset: "3px",
                    },
                  }),
                }}
              >
                <Box
                  component="img"
                  src={social.icon}
                  alt={social.name}
                  loading="lazy"
                  sx={{ width: { xs: 24, sm: 32 }, height: { xs: 24, sm: 32 }, display: "block",
                    filter: social.unavailable ? "grayscale(1)" : "none",
                  }}
                />
              </Box>
            </Tooltip>
          ))}
        </Box>

        <ContactForm
          formRef={formRef}
          values={values}
          errors={errors}
          isSubmitting={isSubmitting}
          feedback={feedback}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Box>
    </Container>
  );
}
