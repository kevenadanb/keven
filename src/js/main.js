import "../scss/main.scss";

$(function () {
  $("a[href^='#']").on("click", function (event) {
    const target = $(this.getAttribute("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 72
        },
        420
      );
    }
  });

  const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    const name    = $("#name").val().trim();
    const email   = $("#email").val().trim();
    const message = $("#message").val().trim();
    const feedback = $("#formFeedback");
    const $btn     = $("#submitBtn");

    // Validação básica
    if (!name || !email || !message) {
      feedback.text("Preencha todos os campos para continuar.").removeClass("text-success").addClass("text-danger");
      if (!name)    $("#name").addClass("is-invalid");
      if (!email)   $("#email").addClass("is-invalid");
      if (!message) $("#message").addClass("is-invalid");
      return;
    }

    $("#name, #email, #message").removeClass("is-invalid");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      feedback.text("Informe um e-mail válido.").removeClass("text-success").addClass("text-danger");
      $("#email").addClass("is-invalid");
      return;
    }

    // Envio via EmailJS
    $btn.prop("disabled", true).text("Enviando…");
    feedback.text("").removeClass("text-success text-danger");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
      .then(function () {
        feedback
          .text("Mensagem enviada com sucesso! Responderei em breve.")
          .removeClass("text-danger")
          .addClass("text-success");
        $("#contactForm")[0].reset();
      })
      .catch(function (err) {
        console.error("EmailJS error:", err);
        feedback
          .text("Falha ao enviar. Tente novamente ou use os links de contato.")
          .removeClass("text-success")
          .addClass("text-danger");
      })
      .finally(function () {
        $btn.prop("disabled", false).text("Enviar mensagem");
      });
  });
});
