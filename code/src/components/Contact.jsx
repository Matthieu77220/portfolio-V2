import { useRef, useState } from 'react';
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';
import { Mail, User, FileText, Send, CheckCircle, ArrowLeft } from 'lucide-react';

export const Contact = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                'portfolio_v2',    
                'template_3uxb37r',    
                form.current,        
                { publicKey: 'oykL2O3gsBurrNeXh' } 
            )
            .then(
                () => {
                    console.log('SUCCESS');
                    setIsSubmitted(true);
                    setIsLoading(false);
                    form.current.reset();
                    setTimeout(() => setIsSubmitted(false), 5000);
                },
                (error) => {
                    console.log('FAILED...', error);
                    setIsLoading(false);
                    alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
                }
            );
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white p-8">
        
            <button 
                type="button" 
                onClick={() => navigate("/Content")}
                className="bg-[#FFF07C] text-[#F3752B] border-4 border-[#F3752B] text-lg font-bold px-6 py-3 
                rounded-xl mb-6 transition duration-300 flex items-center gap-3 shadow-xl
                hover:scale-105 hover:shadow-2xl hover:bg-[#F3752B] hover:text-[#FFF07C] w-full max-w-2xl "
            >   
                <ArrowLeft className="w-5 h-5" />
                Retourner au contenu principal
            </button>

            <div className="w-full max-w-2xl">
        
                <div className="bg-[#FFF07C] rounded-2xl p-8 mb-6 text-center shadow-xl border-4 border-[#F3752B]">
                    <Mail className="w-12 h-12 text-[#F3752B] mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-[#F3752B]">Me contacter</h1>
                    <p className="text-[#F3752B] mt-2">
                        Envoyez-moi un message, je vous répondrai rapidement !
                    </p>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-[#FFF07C] rounded-2xl p-8 shadow-2xl border-4 border-[#F3752B]"
                >
         
                    <div className="mb-6">
                        <label className="flex items-center gap-2 text-[#F3752B] font-semibold mb-2">
                            <FileText className="w-5 h-5" />
                            Objet
                        </label>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Sujet de votre message"
                            className="w-full p-4 rounded-lg border-2 border-[#F3752B] bg-[#F3752B] text-[#FFF07C]
                                       placeholder-[#FFF07C]/70 focus:outline-none focus:ring-2 focus:ring-[#FFF07C] transition"
                        />
                    </div>

 
                    <div className="mb-6">
                        <label className="flex items-center gap-2 text-[#F3752B] font-semibold mb-2">
                            <User className="w-5 h-5" />
                            Prénom Nom
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Votre nom complet"
                            className="w-full p-4 rounded-lg border-2 border-[#F3752B] bg-[#F3752B] text-[#FFF07C]
                                       placeholder-[#FFF07C]/70 focus:outline-none focus:ring-2 focus:ring-[#FFF07C] transition"
                        />
                    </div>

                
                    <div className="mb-6">
                        <label className="flex items-center gap-2 text-[#F3752B] font-semibold mb-2">
                            <Mail className="w-5 h-5" />
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="votre.email@exemple.com"
                            className="w-full p-4 rounded-lg border-2 border-[#F3752B] bg-[#F3752B] text-[#FFF07C]
                                       placeholder-[#FFF07C]/70 focus:outline-none focus:ring-2 focus:ring-[#FFF07C] transition"
                        />
                    </div>

     
                    <div className="mb-6">
                        <label className="flex items-center gap-2 text-[#F3752B] font-semibold mb-2">
                            <FileText className="w-5 h-5" />
                            Message
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="6"
                            placeholder="Écrivez votre message ici..."
                            className="w-full p-4 rounded-lg border-2 border-[#F3752B] bg-[#F3752B] text-[#FFF07C]
                                       placeholder-[#FFF07C]/70 focus:outline-none focus:ring-2 focus:ring-[#FFF07C] transition resize-none"
                        />
                    </div>

                 
                    {isSubmitted && (
                        <div className="mb-6 bg-[#F3752B] text-[#FFF07C] p-4 rounded-lg flex items-center gap-3 border-2 border-[#F3752B]">
                            <CheckCircle className="w-6 h-6" />
                            <span className="font-semibold">
                                Message envoyé avec succès !
                            </span>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#F3752B] text-[#FFF07C] font-bold py-4 px-8 rounded-lg 
                                   hover:bg-[#d86524] transition duration-300 transform hover:scale-105 
                                   shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#FFF07C] border-t-transparent"></div>
                                Envoi en cours...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Envoyer le message
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;