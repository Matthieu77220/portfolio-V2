import { Code, Zap, Globe, Cpu, Lock, Rocket } from 'lucide-react';
import {useNavigate} from "react-router"

function Veille() {

    const navigate = useNavigate();

    return ( 
        <>
            <section className="flex flex-col min-h-screen bg-white p-8">
     
                <section className="
                    bg-[#FFF07C] text-[#F3752B] 
                    rounded-2xl p-12 mb-8
                    transform transition-all duration-300 
                    hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/30
                ">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Cpu className="w-12 h-12" />
                        <h1 className="text-5xl font-bold text-center">WebAssembly</h1>
                        <Code className="w-12 h-12" />
                    </div>
                    <p className="text-center text-xl font-semibold">
                        Le futur de la performance web
                    </p>
                    <div className="flex justify-center mt-8">
                        <a 
                            href={`${import.meta.env.BASE_URL}Veille_techno.odp`} 
                            target="_blank"
                            className="bg-[#F3752B] text-[#FFF07C] px-8 py-3 rounded-lg font-bold 
                            hover:bg-[#d86524] transition duration-300 hover:scale-105 shadow-lg"
                        >
                            📊 Télécharger la présentation complète
                        </a>
                    </div>
                </section>

                <section className="bg-[#FFF07C] border-4 border-[#F3752B] rounded-2xl p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-[#F3752B] flex items-center gap-3">
                        <Globe className="w-8 h-8" />
                        Qu'est-ce que WebAssembly ?
                    </h2>
                    <div className="space-y-4 text-lg text-[#F3752B]">
                        <p>
                            WebAssembly (WASM) est un format d'instructions binaires conçu pour être exécuté 
                            dans les navigateurs web modernes. C'est un complément à JavaScript qui permet 
                            d'exécuter du code à des vitesses proches du code natif.
                        </p>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-6 rounded-xl">
                            <p className="font-semibold mb-2">En bref :</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Standard web ouvert (W3C)</li>
                                <li>Portable et sécurisé</li>
                                <li>Permet d'utiliser C, C++, Rust dans le navigateur</li>
                                <li>Performances quasi-natives</li>
                            </ul>
                        </div>
                    </div>
                </section>

    
                <section className="bg-[#FFF07C] border-4 border-[#F3752B] rounded-2xl p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-[#F3752B] flex items-center gap-3">
                        <Zap className="w-8 h-8" />
                        Avantages principaux
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#F3752B] text-[#FFF07C] p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3">⚡ Performance</h3>
                            <p>Exécution 10 à 100 fois plus rapide que JavaScript pour des calculs intensifs</p>
                        </div>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3">🔧 Polyvalence</h3>
                            <p>Compilation depuis C, C++, Rust, Go et d'autres langages</p>
                        </div>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3">🔒 Sécurité</h3>
                            <p>Environnement sandbox sécurisé avec validation du code</p>
                        </div>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3">🌐 Compatibilité</h3>
                            <p>Supporté par tous les navigateurs modernes</p>
                        </div>
                    </div>
                </section>

  
                <section className="bg-[#FFF07C] border-4 border-[#F3752B] rounded-2xl p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-[#F3752B] flex items-center gap-3">
                        <Rocket className="w-8 h-8" />
                        Cas d'usage concrets
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-[#F3752B] text-[#FFF07C] p-5 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">🎮 Jeux vidéo</h4>
                            <p>Unity, Unreal Engine - Portage de jeux AAA dans le navigateur</p>
                        </div>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-5 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">🎨 Édition multimédia</h4>
                            <p>Photoshop Web, Figma - Outils professionnels en ligne</p>
                        </div>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-5 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">🧮 Calcul scientifique</h4>
                            <p>Simulations, analyses de données, machine learning</p>
                        </div>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-5 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">🔐 Cryptographie</h4>
                            <p>Opérations cryptographiques haute performance</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#FFF07C] border-4 border-[#F3752B] rounded-2xl p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-[#F3752B] flex items-center gap-3">
                        <Lock className="w-8 h-8" />
                        Écosystème et outils
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-[#F3752B] text-[#FFF07C] p-5 rounded-lg text-center">
                            <p className="text-2xl mb-2">🦀</p>
                            <h4 className="font-bold mb-2">Rust + Wasm</h4>
                            <p className="text-sm">wasm-pack, wasm-bindgen</p>
                        </div>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-5 rounded-lg text-center">
                            <p className="text-2xl mb-2">⚙️</p>
                            <h4 className="font-bold mb-2">Emscripten</h4>
                            <p className="text-sm">C/C++ vers WebAssembly</p>
                        </div>
                        <div className="bg-[#F3752B] text-[#FFF07C] p-5 rounded-lg text-center">
                            <p className="text-2xl mb-2">🚀</p>
                            <h4 className="font-bold mb-2">WASI</h4>
                            <p className="text-sm">WebAssembly System Interface</p>
                        </div>
                    </div>
                </section>

    
                <section className="bg-[#FFF07C] text-[#F3752B] rounded-2xl p-8 text-center border-4 border-[#F3752B]">
                    <h2 className="text-3xl font-bold mb-4">Perspectives d'avenir</h2>
                    <p className="text-lg mb-6">
                        WebAssembly révolutionne le développement web en permettant des applications 
                        haute performance directement dans le navigateur. Son adoption croissante par 
                        les grands acteurs du web confirme son rôle central dans l'avenir du développement.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <span className="bg-[#F3752B] text-[#FFF07C] px-4 py-2 rounded-full font-semibold">Adoption massive</span>
                        <span className="bg-[#F3752B] text-[#FFF07C] px-4 py-2 rounded-full font-semibold">Standards W3C</span>
                        <span className="bg-[#F3752B] text-[#FFF07C] px-4 py-2 rounded-full font-semibold">Écosystème mature</span>
                        <span className="bg-[#F3752B] text-[#FFF07C] px-4 py-2 rounded-full font-semibold">Innovation continue</span>
                    </div>
                </section>

                <button 
                type="button" 
                onClick={() => {navigate("/Content")}}
                className="
                bg-[#F3752B] text-[#FFF07C] border-2 border-[#F3752B] text-lg font-semibold p-2 transition duration-200 flex justify-center w-[15vw] rounded-xl my-[4vh]
                hover:p-3 hover:ring-2 hover:ring-[#FFF07C] hover:transition hover:duration-200
                "
                >   
                Retourner au contenu principale
                </button>
            </section>
        </>
    );
}

export default Veille;