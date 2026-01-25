import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    );
};

export default Home;