import layer from "@/assets/images/layer.png";
import HeroOrbit from "./HeroOrbit";

const Hero = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${layer})`,
          }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={800} rotation={-60}>
          <span className="size-28"> &#10023;</span>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <span className="size-12"> &#10023;</span>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={90}>
          <span className="size-8"> &#10023;</span>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <span className="size-8 opacity-20"> &#10023;</span>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80}>
          <span className="size-5 opacity-20"> &#10023;</span>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <span className="size-10 opacity-20"> &#10023;</span>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150}>
          <span className="size-14 opacity-20"> &#10023;</span>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <span className="size-3 opacity-20"> &#10023;</span>
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg select-none">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping rounded-full"></div>
            </div>
            <div className="text-sm font-medium select-none">
              Open to new project opportunities
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide select-none">
            Designing Outstanding User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 select-none md:text-lg lg:px-0 px-4">
            Passionate about building responsive, user-friendly websites with a
            focus on modern technologies
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer relative"
          >
            <span className="font-semibold">Explore My Work</span>
            <span>&#8595;</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl cursor-pointer relative"
          >
            <span>👋</span>
            <span className="font-semibold">Let us stay in touch!</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
