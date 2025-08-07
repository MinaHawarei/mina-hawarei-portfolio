import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaChartLine, FaTools, FaPalette, FaCamera } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer & Technical Lead",
      company: "WE | Silicon Waha",
      location: "Borg Al-Arab – Alexandria",
      period: "Dec 2024 – Present",
      icon: <FaCode className="text-2xl" />,
      description: "Leading development of internal tools used by customer service and technical support teams. Built and deployed full-stack apps like WE-Core and TTAnalyzer. Responsible for planning, development, and team guidance using Laravel, React, and MySQL.",
      achievements: [
        "Developed and deployed WE-Core internal platform for service bookings and ticket tracking",
        "Built TTS Analyzer for customer complaint analysis and compensation suggestions",
        "Led technical team and guided development decisions",
        "Previous role: Technical Support Representative - Focused on software troubleshooting, remote support, customer communication, and time-sensitive issue resolution"
      ],
      technologies: ["Laravel", "React", "MySQL", "Inertia.js", "Tailwind CSS", "Excel Data Parsing", "AI tools"]
    },
    {
      id: 2,
      title: "Branch Manager",
      company: "John's Jewellery stores",
      location: "Borg Al-Arab & Agami – Alexandria",
      period: "Aug 2017 – Jan 2024",
      icon: <FaUsers className="text-2xl" />,
      description: "Managed sales, procurement, supply, financial accounting, financial and accounting data, customer satisfaction and marketing management.",
      achievements: [
        "Oversaw daily operations and team management",
        "Managed financial accounting and data analysis",
        "Handled customer satisfaction and marketing strategies",
        "Coordinated procurement and supply chain operations"
      ],
      technologies: ["Sales Management", "Financial Accounting", "Customer Relations", "Team Leadership"]
    },
    {
      id: 3,
      title: "PLC Control Operator",
      company: "Egyptian Swiss for Milling",
      location: "Borg Al-Arab - Alexandria",
      period: "Feb 2021 – Oct 2021",
      icon: <FaTools className="text-2xl" />,
      description: "Worked as part of a team, focusing on decision making and operational control.",
      achievements: [
        "Operated PLC control systems",
        "Collaborated effectively in team environment",
        "Made critical operational decisions",
        "Maintained system efficiency and safety"
      ],
      technologies: ["PLC Systems", "Industrial Automation", "Team Collaboration", "Decision Making"]
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Queen Plast",
      location: "Borg Al-Arab – Alexandria",
      period: "Sep 2019 – Dec 2019",
      icon: <FaPalette className="text-2xl" />,
      description: "Created logos design and social media design and design of plastic products (bags).",
      achievements: [
        "Designed company logos and branding materials",
        "Created social media graphics and marketing materials",
        "Designed plastic product packaging and bags",
        "Maintained brand consistency across all designs"
      ],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Logo Design", "Social Media Design"]
    },
    {
      id: 5,
      title: "Photographer and Photo Editor",
      company: "4T Studio",
      location: "Mataria – Cairo",
      period: "Aug 2017 – May 2018",
      icon: <FaCamera className="text-2xl" />,
      description: "Handled photography, edit digital images, adjusting the appropriate lighting, adjusting and separating colors.",
      achievements: [
        "Captured professional photographs",
        "Edited and enhanced digital images",
        "Adjusted lighting and color correction",
        "Managed color separation for print production"
      ],
      technologies: ["Photography", "Photo Editing", "Lighting", "Color Correction"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey from technical support to software development leadership
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-600/30"></div>
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600/20 border-2 border-primary-500/30 rounded-full flex items-center justify-center text-primary-400">
                    {experience.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-700/50 rounded-xl p-6 border border-gray-600/30 hover:border-primary-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-primary-400 font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-300 text-sm">
                        {experience.period}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-600/50 text-gray-200 text-xs rounded-full border border-gray-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Education & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/30">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-primary-400 font-medium">Bachelor of Management Information Systems</h5>
                  <p className="text-gray-300 text-sm">Higher Institute For Computer & Information System AboQir – Alexandria</p>
                  <p className="text-gray-400 text-xs">Grade Average: Excellent with Honor (GPA: 3.49)</p>
                </div>
                <div>
                  <h5 className="text-primary-400 font-medium">Higher Average Diploma Building and construction technology</h5>
                  <p className="text-gray-300 text-sm">Technological College Mataria - Cairo</p>
                  <p className="text-gray-400 text-xs">Grade Average: Very Good</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/30">
              <h4 className="text-xl font-semibold text-white mb-4">Key Certifications</h4>
              <div className="space-y-2">
                {[
                  "Laravel Framework with API's (NEW HORIZONS)",
                  "PHP (NEW HORIZONS)",
                  "MySQL Fundamentals (NEW HORIZONS)",
                  "Web Development (IBM SkillsBuild)",
                  "Full Stack Development (UDACITY)",
                  "Data Analyst (UDACITY)",
                  "UI/UX (Front End) Developer (ITI Platform)",
                  "MEAN Stack Developer (ITI Platform)"
                ].map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 