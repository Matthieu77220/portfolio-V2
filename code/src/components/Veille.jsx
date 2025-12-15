import { Code, Zap, Globe, Cpu, Lock, Rocket } from "lucide-react";
import { useNavigate } from "react-router";

function Veille() {

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0d11] text-white">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#0d0d11] via-[#151621] to-[#0d0d11] opacity-90" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <button
          type="button"
          onClick={() => {
            navigate("/Content");
          }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
        >
          ← Retourner au contenu principal
        </button>

        <section className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Cpu className="h-10 w-10 text-[#F3752B]" />
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              WebAssembly
            </h1>
            <Code className="h-10 w-10 text-[#F3752B]" />
          </div>
          <p className="text-base font-semibold text-white/80 sm:text-lg">
            Le futur de la performance web
          </p>
          <div className="flex justify-center">
            <a
              href={`${import.meta.env.BASE_URL}Veille_techno.odp`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3752B] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#F3752B]/40 transition hover:-translate-y-0.5 hover:bg-[#d86524] hover:shadow-2xl hover:shadow-[#F3752B]/50"
            >
              📊 Télécharger la présentation complète
            </a>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <Globe className="h-7 w-7 text-[#F3752B]" />
            Qu&apos;est-ce que WebAssembly ?
          </h2>
          <div className="space-y-4 text-sm text-white/80 sm:text-base">
            <p>
              WebAssembly (WASM) est un format d&apos;instructions binaires
              conçu pour être exécuté dans les navigateurs modernes. Il
              complète JavaScript en permettant d&apos;exécuter du code à des
              vitesses proches du natif.
            </p>
            <div className="rounded-2xl bg-[#F3752B] p-6 text-sm text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <p className="mb-2 font-semibold">En bref :</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Standard web ouvert (W3C)</li>
                <li>Portable et sécurisé</li>
                <li>Permet d&apos;utiliser C, C++, Rust dans le navigateur</li>
                <li>Performances quasi-natives</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <Zap className="h-7 w-7 text-[#F3752B]" />
            Avantages principaux
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#F3752B] p-5 text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <h3 className="mb-2 text-lg font-bold">⚡ Performance</h3>
              <p className="text-sm">
                Exécution 10 à 100 fois plus rapide que JavaScript pour des
                calculs intensifs.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F3752B] p-5 text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <h3 className="mb-2 text-lg font-bold">🔧 Polyvalence</h3>
              <p className="text-sm">
                Compilation depuis C, C++, Rust, Go et d&apos;autres langages.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F3752B] p-5 text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <h3 className="mb-2 text-lg font-bold">🔒 Sécurité</h3>
              <p className="text-sm">
                Environnement sandbox sécurisé avec validation du code.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F3752B] p-5 text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <h3 className="mb-2 text-lg font-bold">🌐 Compatibilité</h3>
              <p className="text-sm">
                Supporté par tous les navigateurs modernes.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <Rocket className="h-7 w-7 text-[#F3752B]" />
            Cas d&apos;usage concrets
          </h2>
          <div className="space-y-3 text-sm text-white/85">
            <div className="rounded-2xl bg-[#F3752B] p-4 text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <h4 className="mb-1 text-base font-bold">🎮 Jeux vidéo</h4>
              <p>Unity, Unreal Engine : portage de jeux dans le navigateur.</p>
            </div>
            <div className="rounded-2xl bg-[#F3752B] p-4 text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <h4 className="mb-1 text-base font-bold">
                🎨 Édition multimédia
              </h4>
              <p>Photoshop Web, Figma : outils professionnels en ligne.</p>
            </div>
            <div className="rounded-2xl bg-[#F3752B] p-4 text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <h4 className="mb-1 text-base font-bold">🧮 Calcul scientifique</h4>
              <p>Simulations, analyses de données, machine learning.</p>
            </div>
            <div className="rounded-2xl bg-[#F3752B] p-4 text-[#FFF07C] shadow-lg shadow-[#F3752B]/40">
              <h4 className="mb-1 text-base font-bold">🔐 Cryptographie</h4>
              <p>Opérations cryptographiques haute performance.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            Perspectives d&apos;avenir
          </h2>
          <p className="text-sm text-white/80 sm:text-base">
            WebAssembly révolutionne le développement web en permettant des
            applications haute performance directement dans le navigateur. Son
            adoption croissante confirme son rôle central dans l&apos;avenir du
            développement.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <span className="rounded-full bg-[#F3752B] px-4 py-2 font-semibold text-[#FFF07C]">
              Adoption massive
            </span>
            <span className="rounded-full bg-[#F3752B] px-4 py-2 font-semibold text-[#FFF07C]">
              Standards W3C
            </span>
            <span className="rounded-full bg-[#F3752B] px-4 py-2 font-semibold text-[#FFF07C]">
              Écosystème mature
            </span>
            <span className="rounded-full bg-[#F3752B] px-4 py-2 font-semibold text-[#FFF07C]">
              Innovation continue
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Veille;