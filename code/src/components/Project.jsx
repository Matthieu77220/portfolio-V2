function Project() {
    return ( 
        <>
        <section className="flex flex-col my-[3vh]">


            {/************************************* DU LIVRE AU CINEMA ***********************************************/}
            <section className="
            bg-[#FFF07C] text-[#F3752B] justify-center rounded-xl p-10 transition duration-300 my-[3vh]
            transform-3d perspective-origin-bottom perspective-near
            hover:translate-z-8 hover:rotate-x-20 hover:ring-2 hover:shadow-xl hover:shadow-gray-400/50 hover:transition hover:duration-300 hover:ring-[#F3752B]
            ">
                <h2 className="text-center text-4xl underline font-bold my-[3vh]">Du Livre au Cinéma</h2>
                <p className="text-center text-2xl font-semibold my-[3vh]">Site vitrine d'une bibliothèque fictive. <br />
                Réaliser en groupe durant la première année de BTS. <br />
                Réaliser en PHP, CSS et JavaScript, avec une base de donnée MySQL</p>
                <img 
                src={`${import.meta.env.BASE_URL}img/screen_bibli.png`}
                alt="projet bibliothèque" 
                className="w-[75vw] h-[60vh]"
                />
            </section>
            

            {/************************************* RESPIRESTATS ***********************************************/}
            <section className="
            bg-[#FFF07C] text-[#F3752B] justify-center rounded-xl p-10 transition duration-300 my-[3vh]
            transform-3d perspective-origin-bottom perspective-near
            hover:translate-z-8 hover:rotate-x-20 hover:ring-2 hover:shadow-xl hover:shadow-gray-400/50 hover:transition hover:duration-300 hover:ring-[#F3752B]
            ">
                <h2 className="text-center text-4xl underline font-bold my-[3vh]">RespireStat</h2>
                <p className="text-center text-2xl font-semibold my-[3vh]">Application lourde triant et affichant des stats venant d'un .csv<br />
                Réaliser en binôme durant la première année de BTS. <br />
                Réaliser en Java</p>
                <img 
                    src={`${import.meta.env.BASE_URL}img/screen_RespireStat.png`}
                    alt="projet respirestat" 
                    className="w-[75vw] h-[60vh]"
                />
            </section>

        {/************************************* Facturation ***********************************************/}
        <section className="
            bg-[#FFF07C] text-[#F3752B] justify-center rounded-xl p-10 transition duration-300 my-[3vh]
            transform-3d perspective-origin-bottom perspective-near
            hover:translate-z-8 hover:rotate-x-20 hover:ring-2 hover:shadow-xl hover:shadow-gray-400/50 hover:transition hover:duration-300 hover:ring-[#F3752B]
            ">
                <h2 className="text-center text-4xl underline font-bold my-[3vh]">Générateur de facture</h2>
                <p className="text-center text-2xl font-semibold my-[3vh]">Site Générant des factures avec des clients enregistrés en local storage.<br />
                Réaliser en binôme durant la première année de BTS. <br />
                Réaliser en JavaScript, HTML et CSS</p>
                <img 
                    src={`${import.meta.env.BASE_URL}img/screen_facturation.png`}
                    alt="projet facturation" 
                    className="w-[75vw] h-[60vh]"
                />
            </section>

        {/************************************* Facturation ***********************************************/}


        <section className="
            bg-[#FFF07C] text-[#F3752B] justify-center rounded-xl p-10 transition duration-300 my-[3vh]
            transform-3d perspective-origin-bottom perspective-near
            hover:translate-z-8 hover:rotate-x-20 hover:ring-2 hover:shadow-xl hover:shadow-gray-400/50 hover:transition hover:duration-300 hover:ring-[#F3752B]
            ">
                <h2 className="text-center text-4xl underline font-bold my-[3vh]">Habitly</h2>
                <p className="text-center text-2xl font-semibold my-[3vh]">Application mobile pour organiser et configurer des séances de sports, des régimes, du temps de sommeil et de l'évolution du poids<br />
                Projet perso débuté en novembre 2025<br />
                Réaliser React-native, node.js et une base de donnée MySQL</p>
        </section>
            

        </section>
        </>
     );
}

export default Project;