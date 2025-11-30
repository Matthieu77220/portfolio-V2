function Experience() {
    return ( 
        <>
        <section className="
        bg-[#FFF07C] w-[80vw] text-center rounded-xl mb-[10vh]
         transform-3d perspective-origin-bottom perspective-midrange transition duration-300
         hover:translate-z-8 hover:rotate-x-20 hover:ring-2 hover:shadow-xl hover:shadow-gray-400/50 hover:transition hover:duration-300 hover:ring-[#F3752B]
        ">
            <h2 className="text-4xl font-bold text-[#F3752B] underline decoration-solid my-[2vh] tracking-wide">
                Stage développeur Full-Stack - Saint-Maure-des-Fossés
            </h2>

            <h3 className="text-3xl font-semibold text-[#F3752B] underline my-[2vh] tracking-wide">
                le projet :
            </h3>

            <p className="text-xl font-normal text-[#F3752B] my-[2vh] tracking-wide">
                Développement d'une MVP d'un CRM pour courtier en prêt immobilier
            </p>

            <h3 className="text-3xl font-semibold text-[#F3752B] underline my-[2vh] tracking-wide">
                les objectifs :
            </h3>
                <div className="flex flex-col items-center">
                    <div className="text-xl text-[#F3752B] text-left space-y-2 ml-[15vw] tracking-wide">
                        <div>★ Création de compte pour Courtier</div>
                        <div>★ Possbilité de gérer</div>
                        <div>★ Gestion des Clients, Co-Clients, Apporteur de dossier, Dossier</div>
                    </div>
                </div>

            <h3 className="text-3xl font-semibold text-[#F3752B] underline my-[2vh] tracking-wide">
                Les technos :
            </h3>

            <div className="flex flex-col items-center my-[2vh]">
                <div className="text-xl text-[#F3752B] text-left space-y-2 mr-[5vw] tracking-wide">
                    <div>★ Python/FastAPI</div>
                    <div>★ Mysql/PhpMyAdmin</div>
                    <div>★ React/Typescript/Tailwindcss</div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Experience;