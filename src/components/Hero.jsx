import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
     const link = document.createElement('a');
      link.href = '/Mina-Hawarei-CV.pdf'; // لازم يكون المسار صحيح
      link.setAttribute('download', 'Mina-Hawarei-CV.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-max section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-primary-400 font-medium"
          >
            Hi, I'm
          </motion.h2>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text"
          >
            Mina Hawarei Sedky
          </motion.h1>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-4xl mx-auto"
          >
            Software Developer & Technical Leader at{' '}
            <span className="text-primary-400 font-semibold">WE (Telecom Egypt)</span>
          </motion.h3>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-gray-400"
          >
            Borg Al-Arab – Alexandria
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Specializing in building internal tools that support customer service and technical teams.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2"
            >
              <span>View Projects</span>
            </button>
            <button
              onClick={downloadCV}
              className="btn-secondary flex items-center gap-2"
            >
              <FaDownload className="text-sm" />
              <span>Download CV</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center gap-6 pt-8"
          >
            <a
              href="https://github.com/minahawarei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/minahawarei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-primary-400 cursor-pointer"
          onClick={scrollToProjects}
        >
          <FaChevronDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 
