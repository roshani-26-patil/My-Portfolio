import { FiArrowRight } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

      <div className="flex flex-col gap-8 max-w-3xl mx-auto">

        {/* Project 1 */}
        <div className="project-card bg-white dark:bg-cardbg text-white-900 dark:text-gray-200 shadow-md dark:shadow-none">
          <h3 className="text-xl font-semibold">Clean & Interactive Web Design</h3>
          <p className="text-gray-400">Modern design with smooth interaction</p>
          <p className="text-sm text-gray-500 mt-2">Figma </p>

          <a
            href="https://www.figma.com/design/RzL3D8fZ4UhLKNWwYKkAEl"
            target="_blank"
            className="project-link flex items-center gap-1 mt-2"
          >
            View on Figma Tool<FiArrowRight className="w-4 h-4" />
          </a>
        </div>

        
        <div className="project-card bg-white dark:bg-cardbg text-white-900 dark:text-gray-200 shadow-md dark:shadow-none">
          <h3 className="text-xl font-semibold">PixelCraft</h3>
          <p className="text-gray-400">Crafting intuitive and engaging user experiences.</p>
          <p className="text-sm text-gray-500 mt-2">Figma</p>

          <a
            href="https://www.figma.com/design/MlzH6dKFiNbxH1BOmszY7x"
            target="_blank"
            className="project-link flex items-center gap-1 mt-2"
          >
            View on Figma Tool<FiArrowRight className="w-4 h-4" />
          </a>
        </div>

        
        <div className="project-card bg-white dark:bg-cardbg text-white-900 dark:text-gray-200 shadow-md dark:shadow-none">
          <h3 className="text-xl font-semibold">LumiCraft Design</h3>
          <p className="text-gray-400">Clean layout with engaging user interactions</p>
          <p className="text-sm text-gray-500 mt-2">Figma Tool</p>

          <a
            href="https://www.figma.com/design/ylLKxc8pWIKkmYyIDWRaQn"
            target="_blank"
            className="project-link flex items-center gap-1 mt-2"
          >
            View on Figma Tool <FiArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}