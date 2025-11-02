import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <section className="relative">
        <img
          src="../public/img/background.jpg"
          className="object-cover w-screen h-screen"
        />
      </section>

      <section
        className="
        fixed mt-[30vh] ml-[10vw]
      "
      >
        <h1
          className="
        text-gray-400 font-bold text-4xl
        sm:text-5xl sm:ml-[8vw]
        md:text-5xl md:ml-[15vw]
        lg:text-6xl
        xl:text-7xl xl:mr-[13vw] xl:ml-55
        "
        >
          Bienvenue sur mon Portfolio 
        </h1>
      </section>

      <section
        className="
      fixed mt-[60vh]
      "
      >
        <button
          type="button"
          onClick={() => navigate("/content")}
          className="
          cursor-pointer border-2 bg-gray-400 text-white rounded-full p-3 w-3xs
          sm:p-4 sm:w-xs sm:text-xl sm:font-semibold
          lg:p-5 lg:w-sm lg:text-2xl lg:font-bold
          "
        >
          <p>C'est parti !</p>
        </button>
      </section>
    </div>
  );
}

export default Landing;
