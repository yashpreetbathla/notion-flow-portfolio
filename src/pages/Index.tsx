
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
