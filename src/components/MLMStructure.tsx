import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign } from 'lucide-react';

const MLMStructure: React.FC = () => {
  const levels = [
    {
      level: 'A',
      name: 'Direct Referrals',
      commission: '10%',
      description: 'Members you directly invite to Goalsbot',
      color: 'from-blue-500 to-blue-600',
      icon: Users,
    },
    {
      level: 'B',
      name: 'Second Level',
      commission: '5%',
      description: 'Members invited by your A-level',
      color: 'from-green-500 to-green-600',
      icon: TrendingUp,
    },
    {
      level: 'C',
      name: 'Third Level',
      commission: '2.50%',
      description: 'Members invited by your B-level',
      color: 'from-purple-500 to-purple-600',
      icon: DollarSign,
    },
    {
      level: 'D',
      name: 'Fourth Level',
      commission: '1.25%',
      description: 'Members invited by your C-level',
      color: 'from-orange-500 to-orange-600',
      icon: Users,
    },
    {
      level: 'E',
      name: 'Fifth Level',
      commission: '0.75%',
      description: 'Members invited by your D-level',
      color: 'from-pink-500 to-pink-600',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Goalsbot Commission Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your Goalsbot network across 5 levels and earn commissions from each tier. 
            The deeper your network, the more you earn!
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              {levels.slice(0, -1).map((_, index) => (
                <line
                  key={index}
                  x1={`${(index + 1) * 20}%`}
                  y1="50%"
                  x2={`${(index + 2) * 20}%`}
                  y2="50%"
                  stroke="url(#connectionGradient)"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              ))}
            </svg>

            <div className="grid grid-cols-5 gap-8 relative" style={{ zIndex: 2 }}>
              {levels.map((level, index) => {
                const Icon = level.icon;
                return (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-8 shadow-xl text-center relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${level.color}`}></div>
                    <div className={`bg-gradient-to-r ${level.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      Level {level.level}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {level.name}
                    </h3>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent mb-4`}>
                      {level.commission}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {level.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${level.color}`}></div>
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${level.color} rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Level {level.level} - {level.name}
                      </h3>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                        {level.commission}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {level.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Building with Goalsbot?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of successful entrepreneurs and start earning today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MLMStructure;