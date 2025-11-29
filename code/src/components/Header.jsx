function Header() {

    return ( 
        <div className="flex justitfy-center">

            <section className="fixed top-0 bg-gray-400 opacity-65 shadow-xl text-white w-full">
                <nav className="flex">
                    <ul className="flex">
                        <li className="px-2 py-2">Qui je suis ?</li>
                        <li className="px-2 py-2">Ma formation</li>
                        <li className="px-2 py-2">Mon expérience professionnel</li>
                        <li className="px-2 py-2">Mes compétences</li>
                        <li className="px-2 py-2">Mes projets</li>
                        <li className="px-2 py-2">Me contacter</li>
                    </ul>
                </nav>
            </section>
        </div>
     );
}

export default Header;