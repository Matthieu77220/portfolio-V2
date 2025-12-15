function Experience() {
  return (
    <section className="w-full max-w-5xl rounded-3xl border border-white/5 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          Stage développeur Full-Stack
        </p>
        <h3 className="text-3xl font-bold text-white sm:text-4xl">
          CRM pour un courtier en prêt immobilier (Saint-Maur-des-Fossés)
        </h3>
        <p className="text-base text-white/80 sm:text-lg">
          Développement d&apos;une MVP permettant de centraliser les dossiers
          clients et le suivi des courtiers.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/5 p-6 shadow-lg shadow-black/20">
          <h4 className="text-lg font-semibold text-white">Objectifs clés</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80 sm:text-base">
            <li>• Création et gestion des comptes courtiers</li>
            <li>• Centralisation clients, co-clients et apporteurs</li>
            <li>• Suivi des dossiers et des étapes métier</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white/5 p-6 shadow-lg shadow-black/20">
          <h4 className="text-lg font-semibold text-white">Stack utilisée</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80 sm:text-base">
            <li>• Python / FastAPI</li>
            <li>• MySQL / PhpMyAdmin</li>
            <li>• React / TypeScript / Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;