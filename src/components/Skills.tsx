import skills from "@/assets/constants/skills";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
    return (
      <section id="skills" className="min-h-screen w-full py-16">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-center tracking-wide select-none font-medium">
            Skills
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-10">
            {skills?.map((skill) => (
              <Link
                href={skill.url}
                target="_blank"
                className="group flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-2xl relative"
                key={skill.id}
              >
                <div className="flex items-center justify-center mb-2">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={40}
                    height={40}
                    className="min-w-[40px] min-h-[40px] object-cover"
                  />
                </div>
                <span className="absolute top-10 left-0 right-0 text-center text-sm font-bold text-indigo-900 bg-indigo-200 border border-indigo-950 rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Go Website
                </span>
                <span className="text-white text-sm font-medium text-center select-none">
                  {skill.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Skills;