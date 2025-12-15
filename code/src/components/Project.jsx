const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
const src = (path) => `${base}/${path.replace(/^\/+/, "")}`;

const projects = [
  {
    title: "Du Livre au Cinéma",
    description:
      "Site vitrine d'une bibliothèque fictive, réalisé en équipe durant la première année de BTS.",
    tech: "PHP · CSS · JavaScript · MySQL",
    image: src("img/screen_bibli.png"),
    alt: "Capture du projet Du Livre au Cinéma",
  },
  {
    title: "RespireStat",
    description:
      "Application lourde triant et affichant des statistiques issues d'un fichier CSV.",
    tech: "Java · Travail en binôme",
    image: src("img/screen_RespireStat.png"),
    alt: "Capture du projet RespireStat",
  },
  {
    title: "Générateur de facture",
    description:
      "Site générant des factures avec gestion des clients stockés en local storage.",
    tech: "JavaScript · HTML · CSS",
    image: src("img/screen_facturation.png"),
    alt: "Capture du générateur de facture",
  },
  {
    title: "Habitly",
    description:
      "Application mobile pour organiser des séances de sport, régimes, sommeil et suivi du poids.",
    tech: "React Native · Node.js · MySQL",
    image: null,
    alt: "Aperçu Habitly",
  },
];

function Project() {
  return (
    <section className="grid gap-10 lg:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:shadow-[#F3752B]/30"
        >
          {project.image ? (
            <div className="relative h-56 w-full overflow-hidden bg-black/50">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0d0d11] via-transparent to-transparent opacity-60" />
            </div>
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-white/5 text-white/60">
              Aperçu à venir
            </div>
          )}

          <div className="flex flex-1 flex-col gap-3 p-6">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-white/75">{project.description}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F3752B]">
              {project.tech}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Project;