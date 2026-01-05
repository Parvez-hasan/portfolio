import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // preserve original behavior: force dark for screenshot/context
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern-light dark:bg-grid-pattern bg-[length:40px_40px] opacity-30 mask-image-gradient"></div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] dark:opacity-20 opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] dark:opacity-20 opacity-10"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-200/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a className="text-2xl font-bold font-display tracking-tight group" href="#">
            <span className="text-gray-900 dark:text-white group-hover:text-primary transition-colors">Meriem</span>
            <span className="text-primary">&lt;/&gt;</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="text-primary font-medium text-sm hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#about">About</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#skills">Skills</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#projects">Projects</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#contact">Contact</a>
          </nav>
          <button className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-tight">
              <span className="block text-gray-900 dark:text-white">Hi, I'm Meriem</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 pb-2">Full stack developer</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Crafting modern, responsive, and user-friendly websites with passion and precision. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
              <a className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden" href="#">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">Download Resume</span>
                <i className="fas fa-download relative group-hover:animate-bounce"></i>
              </a>
              <div className="flex items-center gap-4">
                <a aria-label="GitHub" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-all border border-transparent hover:border-primary/30" href="#">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all border border-transparent hover:border-blue-500/30" href="#">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a aria-label="Email" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all border border-transparent hover:border-red-500/30" href="#">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative py-10 lg:py-0">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-purple-600/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 z-10 bg-gray-900">
                <img alt="Meriem working on code" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ_un0hmO4dJaFkMrOFwAYOIScl57QAJVfZ7Pf62uAgNqT0s1hwgmdVd9Id1jilVfyVYDWHzssqEp_uw11TwrKmMR-LRAtW-0dfDq3ksoN5B5O_OCFHn4kpkWkcGKEngvV3ldaeH5VFzAcqJS_SpSGmJHQb3tve67D6u-6eez8eqWWLv0QLVbn0gBxRNz8WL5syBDHev25BJRl5s2KRfI3L6c6paXsWdhlVJWKZAYWDj50A2XTlYuG-NZ-ljmk8BhChgHZNX-9xtxB"/>
              </div>

              <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 z-20 float-animation">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-shadow">
                  <i className="fab fa-js text-2xl md:text-3xl text-yellow-400"></i>
                </div>
              </div>

              <div className="absolute top-4 right-0 translate-x-1/4 translate-y-0 z-20 float-animation float-delay-1">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-shadow">
                  <i className="fab fa-html5 text-2xl md:text-3xl text-orange-500"></i>
                </div>
              </div>

              <div className="absolute bottom-8 right-4 z-20 float-animation float-delay-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-shadow">
                  <i className="fab fa-react text-3xl md:text-4xl text-cyan-400 animate-[spin_10s_linear_infinite]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="animate-bounce text-gray-400 dark:text-gray-600">
            <i className="fas fa-chevron-down text-xl"></i>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
