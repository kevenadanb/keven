import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ACCENT_GOLD } from "../../theme";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "inicio" },
  { label: "Habilidades", href: "habilidades" },
  { label: "Experiências", href: "experiencias" },
  { label: "Projetos", href: "projetos" },
  { label: "Contato", href: "contato" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ py: 1 }}>
          {/* Brand */}
          <Box
            component="button"
            onClick={() => scrollToSection("inicio")}
            sx={{
              flexGrow: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              p: 0,
              textAlign: "left",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                color: "text.primary",
                lineHeight: 1.2,
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              Keven A. Bezerra
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 400,
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                color: ACCENT_GOLD,
                opacity: 0.85,
                textTransform: "uppercase",
                display: "block",
              }}
            >
              Full-Stack Developer
            </Typography>
          </Box>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 0.5 }}>
            {NAV_LINKS.map((link) => (
              <Box
                key={link.href}
                component="button"
                onClick={() => scrollToSection(link.href)}
                sx={{
                  px: 1.5,
                  py: 0.75,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(224, 225, 221, 0.8)",
                  fontSize: "0.95rem",
                  fontFamily: '"Manrope", sans-serif',
                  fontWeight: 500,
                  position: "relative",
                  transition: "color 220ms ease",
                  "::after": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: ACCENT_GOLD,
                    borderRadius: "2px",
                    opacity: 0,
                    transition: "opacity 220ms ease",
                  },
                  "&:hover": { color: "#fff" },
                  "&:hover::after": { opacity: 1 },
                  "&:focus-visible": {
                    outline: "2px solid rgba(232, 192, 110, 0.55)",
                    outlineOffset: "2px",
                    borderRadius: "4px",
                  },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="Abrir menu de navegação"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", lg: "none" }, color: "text.primary", ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 240 } }}
      >
        <List sx={{ pt: 5 }}>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                onClick={() => {
                  setDrawerOpen(false);
                  setTimeout(() => scrollToSection(link.href), 150);
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
