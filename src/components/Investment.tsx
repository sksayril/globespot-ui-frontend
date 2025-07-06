import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, Clock, Award, Users } from 'lucide-react';

const Investment: React.FC = () => {
  const packages = [
    {
      name: 'Starter',
      price: '$100',
      period: 'One-time',
      features: [
        'Basic Goalsbot access',
        'Level A-C commissions',
        'Basic training materials',
        'Email support',
        'Monthly webinars',
      ],
      popular: false,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional',
      price: '$500',
      period: 'One-time',
      features: [
        'Full Goalsbot access',
        'All 5 levels commissions',
        'Advanced training program',
        'Priority support',
        'Weekly coaching calls',
        'Marketing materials',
      ],
      popular: true,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Enterprise',
      price: '$1,000',
      period: 'One-time',
      features: [
        'Premium Goalsbot access',
        'All 5 levels + bonuses',
        'Personal mentorship',
        '24/7 VIP support',
        'Custom marketing suite',
        'Leadership training',
        'Exclusive events',
      ],
      popular: false,
      gradient: 'from-gold-500 to-gold-600',
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Guaranteed Returns',
      description: 'Start earning commissions immediately after your first referral joins Goalsbot.',
    },
    {
      icon: Shield,
      title: 'Secure Investment',
      description: 'Your investment is protected with our comprehensive security measures.',
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get started in minutes with our streamlined onboarding process.',
    },
    {
      icon: Award,
      title: 'Proven Success',
      description: 'Join thousands of successful investors already earning consistently with Goalsbot.',
    },
  ];

  return (
    <div className="py-20 bg-white">
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
            Goalsbot Investment Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect investment package to start your Goalsbot journey and 
            begin earning commissions across all five levels.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                pkg.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${pkg.gradient}`}></div>
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-gray-600">{pkg.period}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.gradient} flex items-center justify-center mr-3`}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${pkg.gradient} text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow`}
                >
                  Choose {pkg.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Goalsbot Earnings Example
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Level A (5 members × $100 × 10%)</span>
                  <span className="font-semibold text-green-600">$50/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Level B (25 members × $100 × 5%)</span>
                  <span className="font-semibold text-green-600">$125/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Level C (125 members × $100 × 2.5%)</span>
                  <span className="font-semibold text-green-600">$312.50/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Level D (625 members × $100 × 1.25%)</span>
                  <span className="font-semibold text-green-600">$781.25/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Level E (3125 members × $100 × 0.75%)</span>
                  <span className="font-semibold text-green-600">$2,343.75/month</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-green-100 rounded-lg px-4">
                  <span className="text-lg font-bold text-gray-900">Total Monthly Income</span>
                  <span className="text-2xl font-bold text-green-600">$3,612.50</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6">
                <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Monthly Potential
                </h4>
                <p className="text-gray-600">
                  With consistent effort, Goalsbot members can build substantial monthly income 
                  streams that continue to grow over time.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Team Growth
                </h4>
                <p className="text-gray-600">
                  Your earnings multiply as your Goalsbot team grows across all five levels, 
                  creating exponential income potential.
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Passive Income
                </h4>
                <p className="text-gray-600">
                  Once established, your Goalsbot network continues earning commissions 
                  even while you focus on other activities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Investment;