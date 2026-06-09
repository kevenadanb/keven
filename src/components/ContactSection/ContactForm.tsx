import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { FormEvent, RefObject } from "react";
import { ACCENT_GOLD } from "../../theme";
import type { ContactFeedback, ContactFormValues } from "./useContactForm";

interface ContactFormProps {
  formRef: RefObject<HTMLFormElement>;
  values: ContactFormValues;
  errors: Partial<ContactFormValues>;
  isSubmitting: boolean;
  feedback: ContactFeedback;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function ContactForm({
  formRef,
  values,
  errors,
  isSubmitting,
  feedback,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Nome"
            name="name"
            value={values.name}
            onChange={(e) => onChange("name", e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
            required
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="E-mail"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Mensagem"
            name="message"
            multiline
            rows={4}
            value={values.message}
            onChange={(e) => onChange("message", e.target.value)}
            error={!!errors.message}
            helperText={errors.message}
            required
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              startIcon={
                isSubmitting ? <CircularProgress size={18} color="inherit" /> : undefined
              }
              sx={{
                px: 4,
                background: "rgba(26, 35, 126, 0.8)",
                border: `1px solid ${ACCENT_GOLD}`,
                color: ACCENT_GOLD,
                "&:hover": {
                  background: "rgba(26, 35, 126, 1)",
                  border: `1px solid ${ACCENT_GOLD}`,
                },
                "&.Mui-disabled": {
                  opacity: 0.65,
                  color: ACCENT_GOLD,
                  borderColor: ACCENT_GOLD,
                },
              }}
            >
              {isSubmitting ? "Enviando…" : "Enviar Mensagem"}
            </Button>

            {feedback.message && feedback.severity !== "" && (
              <Alert
                severity={feedback.severity}
                sx={{ flexGrow: 1, py: 0.5 }}
                aria-live="polite"
              >
                {feedback.message}
              </Alert>
            )}
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
