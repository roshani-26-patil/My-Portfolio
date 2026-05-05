import { FiHome, FiCode, FiGithub, FiLinkedin,  } from "react-icons/fi";

export default function Dock({ dark, setDark }) {
  return (
    <div className="floating-dock">

      <a href="#" className="dock-item">
        <FiHome />
      </a>

      <a href="#projects" className="dock-item">
        <FiCode />
      </a>

      <a href="https://github.com/roshani-26-patil" target="_blank" className="dock-item">
        <FiGithub />
      </a>

      <a href="https://www.linkedin.com/in/roshani-patil-b54460330" target="_blank" className="dock-item">
        <FiLinkedin />
      </a>

     

    </div>
  );
}