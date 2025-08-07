import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'mina.hawarei@gmail.com',
      link: 'mailto:mina.hawarei@gmail.com'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Phone',
      value: '01212505266',
      link: 'tel:01212505266'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: 'Location',
      value: 'Borg Al-Arab, Alexandria, Egypt',
      link: null
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mina-hawarei',
      link: 'https://www.linkedin.com/in/mina-hawarei/'
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      value: 'github.com/minahawarei',
      link: 'https://github.com/minahawarei'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600/30 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="text-primary-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.label}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-primary-600/10 border border-primary-500/30 rounded-lg"
            >
              <h4 className="text-lg font-semibold text-primary-400 mb-3">
                Let's Work Together
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm passionate about creating innovative solutions and helping businesses 
                achieve their goals through technology. Whether you have a project in mind 
                or just want to connect, I'd love to hear from you!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Connect with me
          </h3>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/minahawarei"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-3xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mina-hawarei/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-3xl"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:mina.hawarei@gmail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-3xl"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="tel:01212505266"
              whileHover={{ scale: 1.1, y: -3 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-3xl"
            >
              <FaPhone />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 