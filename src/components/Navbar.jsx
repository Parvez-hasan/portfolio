import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "#about", id: "about" },
    { name: "Skills", path: "#skills", id: "skills" },
    { name: "Projects", path: "#projects", id: "projects" },
    { name: "Experience", path: "#experience", id: "experience" },
    { name: "Contact", path: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () =>
      sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
       <Link to="/">
           <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Parvez<span className="text-blue-600">.</span>
        </h1>
       </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.path}
                className={`font-medium transition ${
                  active === link.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-gray-200"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button> */}
          <ThemeToggle />

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition ${
                    active === link.id
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
