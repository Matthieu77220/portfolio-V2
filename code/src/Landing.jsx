import { useNavigate } from "react-router-dom";


function Landing() {
  const navigate = useNavigate();

   const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particlesArray = [];
    let hue = 0;
    let frame = 0;

    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const mouse = {
        x: undefined,
        y: undefined,
    }
    canvas.addEventListener('click', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        hue+=8;
        if (particlesArray.length < 100){
              for (let i = 0; i < 20; i++){
            particlesArray.push(new Particle());
          }
        }
    });

    canvas.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        hue+=2;
        if (frame % 2 === 0){
          for (let i = 0; i < 7; i++){
            particlesArray.push(new Particle());
          }
        }
    });

    class Particle {
        constructor(){
            this.x = mouse.x;
            this.y = mouse.y;
            this.size = Math.random() * 15 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            
            const colors = ['#000000', '#888888', '#FFFFFF']; // noir, gris, blanc
            this.color = colors[Math.floor(Math.random() * colors.length)];

        }
        update(){
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw(){
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function handleParticles(){
        for (let i = 0; i < particlesArray.length; i++){
            for (let j = i; j < particlesArray.length; j++){
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100){
                    ctx.beginPath();
                    ctx.strokeStyle = particlesArray[i].color;
                    ctx.lineWidth = 0.2;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
            particlesArray[i].update();
            particlesArray[i].draw();
          
            if (particlesArray[i].size <= 0.3){
                particlesArray.splice(i, 1);
                console.log(particlesArray.length);
                i--;
            }
        }
    }

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ctx.fillStyle = 'rgba(0,0,0,0.02)';
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        frame++;
        requestAnimationFrame(animate);
    }
    animate();

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
        text-gray-400 font-bold text-4xl text-shadow-md text-shadow-gray-400
        sm:text-5xl sm:ml-[8vw]
        md:text-5xl md:ml-[15vw]
        lg:text-6xl
        xl:text-7xl xl:mr-[10vw] xl:ml-10
        "
        >
          Bienvenue sur mon Portfolio 
        </h1>
      </section>

      <section
        className="
      fixed mt-[60vh]
      transform-3d
      perspective-origin-bottom
      perspective-near
      "
      >
        <button
          type="button"
          onClick={() => navigate("/content")}
          className="
          cursor-pointer border-2 bg-gray-400 text-white rounded-full p-3 w-3xs transition dur
          sm:p-4 sm:w-xs sm:text-xl sm:font-semibold
          lg:p-5 lg:w-sm lg:text-2xl lg:font-bold
          hover:translate-z-8 hover:rotate-x-10 hover:rotate-y-1 hover:ring-2 hover:shadow-xl hover:shadow-gray-400/50"
        >
          <p>C'est parti !</p>
        </button>
      </section>
      <canvas id="canvas1" className="absolute w-full h-full top-0 left-0"></canvas>
    </div>
  );
}

export default Landing;
