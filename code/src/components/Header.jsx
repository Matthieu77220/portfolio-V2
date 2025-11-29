function Header() {

    return ( 
        <div className="flex justitfy-center">

            <section className="
            fixed top-0 z-50 bg-[#F3752B] opacity-65 shadow-xl text-white w-full py-2
            hover:opacity-100
            ">
                <nav className="flex">
                    <ul className="flex">
                        <li className="px-2 py-2 hover:underline"><a href="#Me">Qui je suis ?</a></li>
                        <li className="px-2 py-2 hover:underline"><a href="#Formation">Ma formation</a></li>
                        <li className="px-2 py-2 hover:underline"><a href="#">Mon expérience professionnel</a></li>
                        <li className="px-2 py-2 hover:underline"><a href="#">Mes compétences</a></li>
                        <li className="px-2 py-2 hover:underline"><a href="#">Mes projets</a></li>
                        <li className="px-2 py-2 hover:underline"><a href="#">Veille Techno</a></li>
                    </ul>
                </nav>
            </section>
        </div>
     );
}

export default Header;