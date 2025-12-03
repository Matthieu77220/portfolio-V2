import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full">
      
            <section className="hidden lg:flex justify-center">
                <nav className="bg-[#F3752B] opacity-90 hover:opacity-100 transition-opacity duration-300 shadow-xl text-white w-full">
                    <ul className="flex justify-center items-center gap-8 py-4 px-8 flex-wrap">
                        <li className="hover:scale-110 transition-transform">
                            <a href="#Me" className="hover:text-[#FFF07C] font-semibold">
                                Qui je suis ?
                            </a>
                        </li>
                        <li className="hover:scale-110 transition-transform">
                            <a href="#Formation" className="hover:text-[#FFF07C] font-semibold">
                                Ma formation
                            </a>
                        </li>
                        <li className="hover:scale-110 transition-transform">
                            <a href="#Exp" className="hover:text-[#FFF07C] font-semibold">
                                Mon expérience
                            </a>
                        </li>
                        <li className="hover:scale-110 transition-transform">
                            <a href="#Skill" className="hover:text-[#FFF07C] font-semibold">
                                Mes compétences
                            </a>
                        </li>
                        <li className="hover:scale-110 transition-transform">
                            <a href="#Project" className="hover:text-[#FFF07C] font-semibold">
                                Mes projets
                            </a>
                        </li>
                        <li className="hover:scale-110 transition-transform">
                            <a href="#Veille" className="hover:text-[#FFF07C] font-semibold">
                                Veille Techno
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>

        
            <section className="flex lg:hidden items-center justify-between p-4 bg-[#F3752B] shadow-xl">
                <span className="text-white font-bold text-xl">Portfolio</span>
                
                <button 
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="text-3xl text-white p-2 rounded-lg z-50 relative hover:bg-[#FFF07C] hover:text-[#F3752B] transition"
                    aria-label="Toggle menu"
                >
                    {open ? <IoClose /> : <RxHamburgerMenu />}
                </button>

                <nav className={`
                    fixed top-0 right-0 h-screen w-64 bg-[#F3752B] shadow-2xl
                    transform transition-transform duration-300 ease-in-out
                    ${open ? 'translate-x-0' : 'translate-x-full'}
                    pt-20 px-6
                `}>
                    <ul className="flex flex-col gap-6">
                        <li>
                            <a 
                                href="#Me" 
                                className="text-white hover:text-[#FFF07C] font-semibold text-lg block"
                                onClick={() => setOpen(false)}
                            >
                                Qui je suis ?
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#Formation" 
                                className="text-white hover:text-[#FFF07C] font-semibold text-lg block"
                                onClick={() => setOpen(false)}
                            >
                                Ma formation
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#Exp" 
                                className="text-white hover:text-[#FFF07C] font-semibold text-lg block"
                                onClick={() => setOpen(false)}
                            >
                                Mon expérience
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#Skill" 
                                className="text-white hover:text-[#FFF07C] font-semibold text-lg block"
                                onClick={() => setOpen(false)}
                            >
                                Mes compétences
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#Project" 
                                className="text-white hover:text-[#FFF07C] font-semibold text-lg block"
                                onClick={() => setOpen(false)}
                            >
                                Mes projets
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#Veille" 
                                className="text-white hover:text-[#FFF07C] font-semibold text-lg block"
                                onClick={() => setOpen(false)}
                            >
                                Veille Techno
                            </a>
                        </li>
                    </ul>
                </nav>

          
                {open && (
                    <div 
                        className="fixed inset-0 bg-black/50 -z-10"
                        onClick={() => setOpen(false)}
                    />
                )}
            </section>
        </header>
    );
}

export default Header