import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaReact, FaJs, FaPhp, FaDatabase, FaStar, FaCodeBranch, FaCheckCircle } from 'react-icons/fa';
import { SiTailwindcss, SiInertia, SiWebrtc, SiTypescript, SiPython, SiDocker, SiNginx } from 'react-icons/si';
import axios from 'axios';
import { FaCode } from 'react-icons/fa';


const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Production projects (in use at WE)
  const productionProjects = [
    {
      id: 'we-core',
      name: 'WE-Core App',
      description: 'A comprehensive internal platform built for WE to manage service bookings, internal posts, and ticket tracking (VOC). The system includes a weekly booking calendar with dynamic time slot grouping, blocked/reserved slot management, internal post publishing for customer service teams, and a ticketing module for logging and analyzing customer interactions.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'Inertia.js', 'Tailwind CSS', 'Role-based Access', 'FullStack Development'],
      githubUrl: 'https://github.com/MinaHawarei/We-Core',
      liveUrl: null,
      status: 'In Production at WE',
      language: 'PHP'
    },
    {
      id: 'tt-analyzer',
      name: 'TTS Analyzer',
      description: 'A production-grade tool developed for analyzing customer complaint tickets. It helps customer service agents determine appropriate handling steps, resolution timelines, and compensation suggestions (cash or data). The system also parses CDR (Call Detail Record) Excel files to validate customer usage during the reported issue period and ensure adherence to compensation policies.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind', 'Excel Data Parsing', 'AI tools', 'FullStack Development'],
      githubUrl: 'https://github.com/MinaHawarei/TTAnalyzer',
      liveUrl: null,
      status: 'In Production at WE',
      language: 'PHP'
    }
  ];

  // Featured projects
  const featuredProjects = [
    {
      id: 'marina-farm',
      name: 'Marina Farm ERP System',
      description: 'A comprehensive ERP system designed for Marina Farm to manage livestock, employees, tools, finances, and daily operations. The system includes modules for animal records, milk production tracking, employee management, tool maintenance scheduling, and role-based access control.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS', 'Role-based Access', 'FullStack Development'],
      githubUrl: 'https://github.com/MinaHawarei/Marina-Farm',
      liveUrl: null,
      language: 'PHP'
    },
    {
      id: '3d-elevator-generator',
      name: '3D Elevator Generator',
      description: 'A web-based tool that dynamically generates a 3D elevator model based on user inputs. Any changes made by the user are instantly reflected in the model in real time. Built using React, JavaScript, and Three.js for interactive 3D rendering.',
      technologies: ['React', 'JavaScript', 'Three.js', 'Real-Time Rendering', 'AI tools', 'UI/UX Development'],
      githubUrl: 'https://github.com/MinaHawarei/3D-elevator-Generator',
      liveUrl: null,
      language: 'JavaScript'
    },
    {
      id: 'ze-dashboard',
      name: 'ZE Dashboard',
      description: 'A Laravel-based dashboard to manage content and data efficiently.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Database Management', 'Backend Development'],
      githubUrl: 'https://github.com/MinaHawarei/ZE-Dashboard',
      liveUrl: null,
      language: 'PHP'
    }
  ];

  // Enhanced technology icons mapping
  const techIcons = {
    'Laravel': <FaLaravel className="text-red-500" />,
    'React': <FaReact className="text-blue-400" />,
    'JavaScript': <FaJs className="text-yellow-400" />,
    'TypeScript': <SiTypescript className="text-blue-600" />,
    'PHP': <FaPhp className="text-purple-500" />,
    'Python': <SiPython className="text-blue-500" />,
    'MySQL': <FaDatabase className="text-blue-600" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'Inertia.js': <SiInertia className="text-purple-400" />,
    'WebSockets': <SiWebrtc className="text-green-400" />,
    'Excel Data Parsing': <FaDatabase className="text-green-600" />,
    'Docker': <SiDocker className="text-blue-500" />,
    'Nginx': <SiNginx className="text-green-500" />,
    'IoT': <FaDatabase className="text-blue-400" />,
    'Dashboard': <FaDatabase className="text-purple-400" />,
    'Monitoring': <FaDatabase className="text-green-400" />,
    'Chart.js': <FaJs className="text-blue-500" />,
    'Analytics': <FaDatabase className="text-orange-400" />,
    'Three.js': <FaJs className="text-green-500" />,
    '3D Graphics': <FaDatabase className="text-purple-500" />,
    'WebGL': <FaJs className="text-blue-600" />,
    'Configuration': <FaDatabase className="text-gray-400" />,
    'Role-based Access': <FaDatabase className="text-blue-700" />,
    'FullStack Development': <FaCode className="text-blue-500" />,
    'Blade': <FaCode className="text-orange-500" />,
    'Real-Time Rendering': <FaCode className="text-green-500" />,
    'AI tools': <FaCode className="text-purple-600" />,
    'UI/UX Development': <FaCode className="text-pink-500" />,
    'Database Management': <FaDatabase className="text-indigo-500" />,
    'Backend Development': <FaDatabase className="text-gray-500" />
  };

  // Language to technology mapping
  const languageToTech = {
    'JavaScript': 'JavaScript',
    'TypeScript': 'TypeScript',
    'PHP': 'PHP',
    'Python': 'Python',
    'HTML': 'HTML',
    'CSS': 'CSS',
    'Vue': 'Vue',
    'Java': 'Java',
    'C#': 'C#',
    'Go': 'Go',
    'Rust': 'Rust'
  };

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all public repositories
        const response = await axios.get('https://api.github.com/users/minahawarei/repos', {
          params: {
            sort: 'updated',
            per_page: 100, // Get more repos
            type: 'owner' // Only get owned repos, not forked ones
          },
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        const repos = response.data;
        
        // Filter and format repositories
        const formattedRepos = repos
          .filter(repo => !repo.fork && repo.description && !repo.private)
          .map(repo => {
            const technologies = [];
            if (repo.language && languageToTech[repo.language]) {
              technologies.push(languageToTech[repo.language]);
            }
            
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              technologies: technologies,
              githubUrl: repo.html_url,
              liveUrl: repo.homepage || null,
              stars: repo.stargazers_count,
              language: repo.language,
              forks: repo.forks_count,
              updatedAt: new Date(repo.updated_at)
            };
          })
          .sort((a, b) => b.updatedAt - a.updatedAt) // Sort by most recently updated
          .slice(0, 12); // Limit to 12 repos for better performance
        
        setGithubProjects(formattedRepos);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        if (error.response?.status === 403) {
          setError('GitHub API rate limit exceeded. Please try again later.');
        } else if (error.response?.status === 404) {
          setError('GitHub profile not found.');
        } else {
          setError('Failed to fetch projects from GitHub. Please check your connection.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production systems, featured projects, and open-source contributions
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Production Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Production Projects
            <span className="block text-lg font-normal text-gray-400 mt-2">In Use at WE</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productionProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl border-2 border-green-500/40 hover:border-green-500/60 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className="px-3 py-1 bg-green-600/30 text-green-300 text-xs rounded-full border border-green-500/40 flex items-center gap-1">
                      <FaCheckCircle className="text-green-400" />
                      In Production
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/60 text-gray-200 text-xs rounded-full flex items-center gap-2 border border-gray-600/30"
                        >
                          {techIcons[tech] && techIcons[tech]}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm group/link"
                        >
                          <FaGithub className="group-hover/link:scale-110 transition-transform" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-green-400 font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-primary-500/20"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className="px-3 py-1 bg-primary-600/30 text-primary-300 text-xs rounded-full border border-primary-500/30">
                      Featured
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/60 text-gray-200 text-xs rounded-full flex items-center gap-2 border border-gray-600/30"
                        >
                          {techIcons[tech] && techIcons[tech]}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm group/link"
                        >
                          <FaGithub className="group-hover/link:scale-110 transition-transform" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      Language: {project.language}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* More Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            More Projects
            <span className="block text-lg font-normal text-gray-400 mt-2">From GitHub</span>
          </h3>
          
          {/* Loading State */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-primary-500 border-t-transparent"></div>
              <p className="text-gray-400 mt-4">Loading projects from GitHub...</p>
            </motion.div>
          )}

          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-400 mb-2">⚠️ {error}</p>
                <p className="text-gray-400 text-sm">
                  You can still view my projects directly on GitHub
                </p>
              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          {!loading && !error && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {githubProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-gray-800/60 rounded-xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-primary-500/10"
                >
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors line-clamp-1">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.stars > 0 && (
                          <span className="flex items-center gap-1 text-yellow-400 text-xs">
                            <FaStar />
                            {project.stars}
                          </span>
                        )}
                        {project.forks > 0 && (
                          <span className="flex items-center gap-1 text-gray-400 text-xs">
                            <FaCodeBranch />
                            {project.forks}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700/60 text-gray-200 text-xs rounded flex items-center gap-1 border border-gray-600/30"
                          >
                            {techIcons[tech] && techIcons[tech]}
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.language && (
                        <span className="text-xs text-gray-500">
                          Language: {project.language}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm group/link"
                          >
                            <FaGithub className="group-hover/link:scale-110 transition-transform" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm group/link"
                          >
                            <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform" />
                            <span>Live</span>
                          </a>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">
                        {project.updatedAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/minahawarei"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            <FaGithub className="group-hover:scale-110 transition-transform" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 