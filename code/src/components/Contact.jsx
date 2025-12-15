import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";
import {
  Mail,
  User,
  FileText,
  Send,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "portfolio_v2",
        "template_3uxb37r",
        form.current,
        { publicKey: "oykL2O3gsBurrNeXh" }
      )
      .then(
        () => {
          console.log("SUCCESS");
          setIsSubmitted(true);
          setIsLoading(false);
          form.current.reset();
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setIsLoading(false);
          alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0d11] text-white">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#0d0d11] via-[#151621] to-[#0d0d11] opacity-90" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <button
          type="button"
          onClick={() => navigate("/Content")}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Retourner au contenu principal
        </button>

        <section className="mx-auto flex w-full max-w-2xl flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3752B]/15 text-[#F3752B] shadow-inner shadow-[#F3752B]/30">
              <Mail className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">Me contacter</h1>
            <p className="mt-2 text-sm text-white/75 sm:text-base">
              Envoyez-moi un message, je vous répondrai rapidement.
            </p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur"
          >
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/90">
                <FileText className="h-4 w-4" />
                Objet
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Sujet de votre message"
                className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/40 shadow-inner shadow-black/40 focus:border-[#F3752B] focus:outline-none focus:ring-2 focus:ring-[#F3752B]/60"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/90">
                <User className="h-4 w-4" />
                Prénom Nom
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom complet"
                className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/40 shadow-inner shadow-black/40 focus:border-[#F3752B] focus:outline-none focus:ring-2 focus:ring-[#F3752B]/60"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/90">
                <Mail className="h-4 w-4" />
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="votre.email@exemple.com"
                className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/40 shadow-inner shadow-black/40 focus:border-[#F3752B] focus:outline-none focus:ring-2 focus:ring-[#F3752B]/60"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/90">
                <FileText className="h-4 w-4" />
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                placeholder="Écrivez votre message ici..."
                className="w-full resize-none rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/40 shadow-inner shadow-black/40 focus:border-[#F3752B] focus:outline-none focus:ring-2 focus:ring-[#F3752B]/60"
              />
            </div>

            {isSubmitted && (
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                <CheckCircle className="h-5 w-5" />
                <span>Message envoyé avec succès !</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#F3752B] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#F3752B]/40 transition hover:-translate-y-0.5 hover:bg-[#d86524] hover:shadow-2xl hover:shadow-[#F3752B]/50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#FFF07C] border-t-transparent" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Envoyer le message
                </>
              )}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;