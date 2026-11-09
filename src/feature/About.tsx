import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-slate-600 overflow-hidden border-2 border-slate-600 shadow-lg">
            <img
              src="/images/FOTO.jpeg"
              alt="Jared Lewis"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-400 leading-tight">
            Jared Lewis Ezekiel White
          </h1>
          <p className="mt-1 text-lg sm:text-xl text-slate-300 font-light tracking-wide">
            Full-Stack Developer | Technology Enthusiast
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">About Me</h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Hello! I'm Jared, a developer with over 3 years of experience
            building digital products and interactive applications. My
            experience includes web and mobile development, game server
            development, and creating custom systems. I am passionate about
            technology and innovation, particularly exploring how digital
            solutions can create value and solve real-world problems.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-3 text-lg sm:text-xl">Skills</h3>
            <ul className="space-y-4 text-base text-slate-300">
              <li>
                <strong>Frontend Development:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript & JavaScript</li>
                  <li>HTML, CSS & Tailwind CSS</li>
                </ul>
              </li>
              <li>
                <strong>Backend Development:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Node.js</li>
                  <li>PHP & Python</li>
                  <li>Java</li>
                </ul>
              </li>
              <li>
                <strong>Mobile Development:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>React Native</li>
                  <li>Swift (iOS)</li>
                </ul>
              </li>
              <li>
                <strong>Game Development:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Roblox Studio & Luau</li>
                  <li>FiveM Development</li>
                  <li>Gameplay Systems & UI</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-3 text-lg sm:text-xl">
              Experience
            </h3>

            <ul className="space-y-5 text-base text-slate-300">
              <li>
                <div className="font-semibold text-white">
                  Full-Stack Developer
                </div>
                <div className="font-semibold text-white">
                  Developing Roleplay Game Server
                </div>
                <div className="text-sm sm:text-base text-slate-400 font-medium">
                  2020 – 2022
                </div>

                <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-sm sm:text-base">
                  <li>
                    Developed a FiveM-based role-playing server with custom
                    gameplay systems and features.
                  </li>
                  <li>
                    Managed company websites, including design, deployment,
                    cross-browser optimization, and feature implementation.
                  </li>
                </ul>
              </li>

              <li>
                <div className="font-semibold text-white">
                  Full-Stack Developer
                </div>
                <div className="font-semibold text-white">
                  Developing Buy And Sell Forum
                </div>
                <div className="text-sm sm:text-base text-slate-400 font-medium">
                  2022 – 2023
                </div>

                <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-sm sm:text-base">
                  <li>
                    Developed a cross-platform mobile application for iOS and
                    Android based on project requirements.
                  </li>
                  <li>
                    Designed and developed a buy-and-sell forum from concept to
                    deployment, including responsive design and feature
                    implementation.
                  </li>
                </ul>
              </li>

              <li>
                <div className="font-semibold text-white">
                  Independent Developer
                </div>
                <div className="text-sm sm:text-base text-slate-400 font-medium">
                  Personal & Independent Projects
                </div>

                <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-sm sm:text-base">
                  <li>
                    Develop web and mobile applications, including personal
                    portfolio and digital platforms.
                  </li>
                  <li>
                    Build custom Roblox systems and interactive multiplayer
                    experiences using Luau.
                  </li>
                  <li>
                    Handle project development from concept and UI design to
                    implementation and deployment.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
