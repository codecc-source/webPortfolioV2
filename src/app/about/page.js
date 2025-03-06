export default function About() {
    return (
      <main className="min-h-screen bg-[#0A192F] text-[#64FFDA] flex flex-col items-center justify-center p-6 bg-[url('/Sprinkle.svg')] bg-cover">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-lg text-gray-300">
            Hi, I'm <span className="text-[#64FFDA] font-semibold">Carlito O. Tingson Jr</span>. 
            I'm a passionate web developer focused on building beautiful and functional websites. 
            My expertise includes <span className="text-white">Next.js, React, Tailwind CSS, and modern JavaScript frameworks.</span>
          </p>
          
          <p className="mt-4 text-lg text-gray-300">
            When I'm not coding, I love exploring new technologies, learning about UI/UX design, and working on creative projects.
          </p>
        </div>
      </main>
    );
  }
  