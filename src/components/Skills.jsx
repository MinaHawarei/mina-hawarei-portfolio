import { motion } from 'framer-motion';
import { FaLaravel, FaReact, FaJs, FaPhp, FaDatabase, FaHtml5, FaCss3Alt, FaGit, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiInertia, SiWebrtc, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    {
      name: 'Laravel',
      icon: <FaLaravel className="text-3xl" />,
      level: 'Advanced',
      color: 'text-red-500',
      description: 'PHP framework for web application development'
    },
    {
      name: 'PHP',
      icon: <FaPhp className="text-3xl" />,
      level: 'Advanced',
      color: 'text-purple-500',
      description: 'Server-side scripting language'
    },
    {
      name: 'MySQL',
      icon: <FaDatabase className="text-3xl" />,
      level: 'Advanced',
      color: 'text-blue-600',
      description: 'Relational database management system'
    },
    {
      name: 'RESTful APIs',
      icon: <FaServer className="text-3xl" />,
      level: 'Advanced',
      color: 'text-green-500',
      description: 'API design and development'
    },
    {
      name: 'React',
      icon: <FaReact className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-blue-400',
      description: 'JavaScript library for building user interfaces'
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-yellow-400',
      description: 'Programming language for web development'
    },
    {
      name: 'HTML & CSS',
      icon: <FaHtml5 className="text-3xl" />,
      level: 'Advanced',
      color: 'text-orange-500',
      description: 'Markup and styling languages'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-cyan-400',
      description: 'Utility-first CSS framework'
    },
    {
      name: 'Inertia.js',
      icon: <SiInertia className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-purple-400',
      description: 'Modern monoliths with SPA feel'
    },
    {
      name: 'Git',
      icon: <FaGit className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-orange-600',
      description: 'Version control system'
    }
  ];

  const additionalSkills = [
    {
      name: 'Adobe Illustrator',
      icon: <SiAdobeillustrator className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-orange-600',
      description: 'Vector graphics editor'
    },
    {
      name: 'Adobe Photoshop',
      icon: <SiAdobephotoshop className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-blue-500',
      description: 'Image editing software'
    },
    {
      name: 'Data Analysis',
      icon: <FaDatabase className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-green-600',
      description: 'Data processing and analysis'
    },
    {
      name: 'Network+',
      icon: <FaServer className="text-3xl" />,
      level: 'Intermediate',
      color: 'text-blue-700',
      description: 'Network administration'
    }
  ];

  const softSkills = [
    'Problem-Solving',
    'Communication Skills',
    'Decision Making Skills',
    'Ability to Work Under Pressure',
    'Team Leadership',
    'Time Management',
    'Customer Relations',
    'Project Management'
  ];

  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical skills, tools, and professional competencies
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className={`${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {skill.name}
                  </h4>
                  <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-300 text-xs rounded-full border border-primary-500/30 mb-3">
                    {skill.level}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 group text-center"
              >
                <div className={`${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {skill.name}
                </h4>
                <span className="inline-block px-2 py-1 bg-gray-700/60 text-gray-300 text-xs rounded-full border border-gray-600/30 mb-2">
                  {skill.level}
                </span>
                <p className="text-gray-300 text-xs">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 rounded-lg p-4 text-center border border-gray-700/30 hover:border-primary-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Skills Overview
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Back-End Developer with strong expertise in Laravel, PHP and MySQL, dedicated to building efficient and scalable server-side solutions. 
              With over five years of professional experience spanning customer service, team management, and technical leadership, 
              I bring a unique perspective to backend development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-primary-400 font-semibold mb-2">Backend Development</h4>
                <p className="text-gray-300 text-sm">
                  Laravel, PHP, MySQL, RESTful APIs, Server-side development
                </p>
              </div>
              <div>
                <h4 className="text-primary-400 font-semibold mb-2">Frontend Development</h4>
                <p className="text-gray-300 text-sm">
                  React, JavaScript, HTML, CSS, Tailwind CSS, Inertia.js
                </p>
              </div>
              <div>
                <h4 className="text-primary-400 font-semibold mb-2">Additional Tools</h4>
                <p className="text-gray-300 text-sm">
                  Adobe Creative Suite, Data Analysis, Network+, Git
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 