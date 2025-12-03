import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { Mail } from "lucide-react";
import { FaFileExcel } from "react-icons/fa";

function Footer() {
    const navigate = useNavigate();
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 50; 

            setShowFooter(isBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showFooter) return null; 

    return (
        <footer className="fixed bottom-0 w-full bg-[#F3752B] shadow-2xl z-40">
            <div className="hidden md:flex items-center justify-between px-8 py-4">
                <div className="flex gap-6">
                    <a 
                        href="https://github.com/Matthieu77220" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#FFF07C] text-3xl hover:scale-125 transition-transform"
                    >
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/matthieu-dietrich-6b441b390/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#FFF07C] text-3xl hover:scale-125 transition-transform"
                    >
                        <FaLinkedin />
                    </a>
                    <a 
                        href={`${import.meta.env.BASE_URL}Mon-cv.pdf`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#FFF07C] text-3xl hover:scale-125 transition-transform"
                    >
                        <TbFileCv />
                    </a>
                    <a 
                        href={`${import.meta.env.BASE_URL}Tab_synthèse.xlsx`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#FFF07C] text-3xl hover:scale-125 transition-transform"
                    >
                        <FaFileExcel />
                    </a>
                </div>

                <button
                    onClick={() => navigate("/contact")}
                    className="bg-[#FFF07C] text-[#F3752B] px-6 py-3 rounded-lg font-bold 
                    hover:bg-white transition duration-300 hover:scale-105 shadow-lg
                    flex items-center gap-2"
                >
                    <Mail className="w-5 h-5" />
                    Me contacter
                </button>
            </div>

            <div className="flex md:hidden flex-col items-center gap-4 py-4 px-4">
                <button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-[#FFF07C] text-[#F3752B] px-6 py-3 rounded-lg font-bold 
                    hover:bg-white transition duration-300 hover:scale-105 shadow-lg
                    flex items-center justify-center gap-2"
                >
                    <Mail className="w-5 h-5" />
                    Me contacter
                </button>

                <div className="flex gap-8">
                    <a 
                        href="https://github.com/Matthieu77220" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#FFF07C] text-3xl hover:scale-125 transition-transform"
                    >
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/matthieu-dietrich-6b441b390/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#FFF07C] text-3xl hover:scale-125 transition-transform"
                    >
                        <FaLinkedin />
                    </a>
                    <a 
                        href={`${import.meta.env.BASE_URL}Mon-cv.pdf`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#FFF07C] text-3xl hover:scale-125 transition-transform"
                    >
                        <TbFileCv />
                    </a>
                     <a 
                        href={`${import.meta.env.BASE_URL}Tab_synthèse.xlsx`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#FFF07C] text-3xl hover:scale-125 transition-transform"
                    >
                        <FaFileExcel />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;