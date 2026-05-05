export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="flex flex-col md:flex-row items-center gap-14 max-w-6xl w-full">

        
        <div className="flex justify-center align-top">
          <div className="p-[4px] rounded-full bg-gradient-to-r from-orange-500 to-accent2">
            <img
              src="/public/img.port.jpeg"
              className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover object-[center_35%]"
            />
          </div>
        </div>

      
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent">
            Patil Roshani
          </h1>

          <p className="mt-4 text-gray-400 max-w-xl">
            B.Tech Computer Science student passionate about building modern, responsive, and interactive web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="/Chetana_Resume_New_Template.pdf" target="_blank" className="btn btn-outline">
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}