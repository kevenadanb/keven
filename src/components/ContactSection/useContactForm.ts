import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFeedback {
  message: string;
  severity: "success" | "error" | "";
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<ContactFeedback>({ message: "", severity: "" });

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: Partial<ContactFormValues> = {};
    if (!values.name.trim()) newErrors.name = "Campo obrigatório";
    if (!values.email.trim()) {
      newErrors.email = "Campo obrigatório";
    } else if (!EMAIL_REGEX.test(values.email)) {
      newErrors.email = "Informe um e-mail válido";
    }
    if (!values.message.trim()) newErrors.message = "Campo obrigatório";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate() || !formRef.current) return;

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

    setIsSubmitting(true);
    setFeedback({ message: "", severity: "" });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setFeedback({
        message: "Mensagem enviada com sucesso! Responderei em breve.",
        severity: "success",
      });
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setFeedback({
        message: "Falha ao enviar. Tente novamente ou use os links de contato.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return { formRef, values, errors, isSubmitting, feedback, handleChange, handleSubmit };
}
