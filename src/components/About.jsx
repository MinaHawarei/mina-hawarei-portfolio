import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaUsers, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const About = () => {
  const strengths = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Back-End Development",
      description: "Strong expertise in Laravel, PHP, and MySQL with over one year of experience"
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Database Management",
      description: "Proficient in MySQL, RESTful APIs, and data analysis"
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: "Full-Stack Development",
      description: "Experience with Laravel, React, Inertia.js, and Tailwind CSS"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Team Leadership",
      description: "Technical leadership and team guidance experience"
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Education",
      description: "Bachelor's in Management Information Systems (GPA: 3.49)"
    },
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Certifications",
      description: "Multiple industry-recognized certifications in web development"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Professional Summary
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Back-End Developer with strong expertise in Laravel, PHP and MySQL, dedicated to building efficient and scalable server-side solutions. With over five years of professional experience spanning customer service, team management, and technical leadership, I bring a unique perspective to backend development.
              </p>
              <p>
                Skilled in problem-solving and decision-making under pressure, with a proven commitment to high-quality project outcomes. Holding a Bachelor's degree in Management Information Systems and equipped with industry-recognized certifications in web development and database management, I'm ready to contribute to dynamic, backend-focused projects.
              </p>
              <p>
                Currently serving as Software Developer & Technical Lead at WE , where I lead development of internal tools used by customer service and technical support teams, building and deploying full-stack applications like WE-Core and TTAnalyzer.
              </p>
            </div>

            {/* Key Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/30">
                <h4 className="text-primary-400 font-semibold mb-2">Education</h4>
                <p className="text-sm text-gray-300">Bachelor of Management Information Systems</p>
                <p className="text-xs text-gray-400">GPA: 3.49 (Excellent with Honor)</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/30">
                <h4 className="text-primary-400 font-semibold mb-2">Experience</h4>
                <p className="text-sm text-gray-300">1+ Years Professional Experience</p>
                <p className="text-xs text-gray-400">Backend Development & Team Leadership</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/30">
                <h4 className="text-primary-400 font-semibold mb-2">Location</h4>
                <p className="text-sm text-gray-300">Borg Al-Arab, Alexandria, Egypt</p>
                <p className="text-xs text-gray-400">Available for remote opportunities</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/30">
                <h4 className="text-primary-400 font-semibold mb-2">Languages</h4>
                <p className="text-sm text-gray-300">Arabic (Native), English (B1+)</p>
                <p className="text-xs text-gray-400">Professional working proficiency</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Key Strengths & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-700/50 rounded-lg p-6 border border-gray-600/30 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="text-primary-400 mb-4">
                    {strength.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Technical Skills & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Laravel', 'PHP', 'MySQL', 'RESTful APIs', 'HTML', 'CSS', 'JavaScript',
              'React', 'Inertia.js', 'Tailwind CSS', 'Git', 'Adobe Illustrator', 'Adobe Photoshop',
              'Data Analysis', 'Network+', 'Problem-Solving', 'Communication', 'Decision Making'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-700/30 rounded-lg p-3 text-center border border-gray-600/20 hover:border-primary-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 