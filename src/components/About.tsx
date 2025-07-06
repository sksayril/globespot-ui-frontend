import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Shield, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '50,000+', label: 'Active Members', icon: Users },
    { number: '5 Years', label: 'Experience', icon: Award },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '50+', label: 'Countries', icon: Globe },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We prioritize the security of your investments and personal data with industry-leading protection.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our platform is built around fostering genuine connections and mutual success among members.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on delivering measurable results and sustainable income growth for all our members.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with entrepreneurs worldwide and build your network across international markets.',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Goalsbot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering entrepreneurs worldwide to build sustainable income streams 
            through innovative MLM technology and proven strategies with Goalsbot.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We believe everyone deserves the opportunity to achieve financial freedom. 
              Goalsbot's mission is to provide a transparent, secure, and profitable platform 
              that empowers individuals to build sustainable income streams.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Through innovative technology, comprehensive training, and unwavering support, 
              Goalsbot helps our members create lasting wealth while building meaningful connections 
              with entrepreneurs worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                Est. 2019
              </div>
              <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                $2M+ Paid Out
              </div>
              <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
                50+ Countries
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape the culture of our Goalsbot community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-lg">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;