import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Award, Clock, Target, BarChart3 } from 'lucide-react';
import MLMStructure from './MLMStructure';
import GrowthChart from './GrowthChart';

const Earnings: React.FC = () => {
  const earningMethods = [
    {
      title: 'Direct Referral Commissions',
      percentage: '10%',
      description: 'Earn 10% commission on all check-in earnings from members you directly invite to Goalsbot (Level A).',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Second Level Commissions',
      percentage: '5%',
      description: 'Earn 5% commission on check-in earnings from members invited by your Level A team.',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Third Level Commissions',
      percentage: '2.50%',
      description: 'Earn 2.50% commission on check-in earnings from your Level C team members.',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Fourth Level Commissions',
      percentage: '1.25%',
      description: 'Earn 1.25% commission on check-in earnings from your Level D team members.',
      icon: Award,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Fifth Level Commissions',
      percentage: '0.75%',
      description: 'Earn 0.75% commission on check-in earnings from your Level E team members.',
      icon: Target,
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const topEarners = [
    {
      name: 'Sarah Johnson',
      earnings: '$15,250',
      period: 'This Month',
      level: 'Diamond',
      teamSize: '2,847',
    },
    {
      name: 'Michael Chen',
      earnings: '$12,890',
      period: 'This Month',
      level: 'Platinum',
      teamSize: '1,956',
    },
    {
      name: 'Emma Rodriguez',
      earnings: '$9,675',
      period: 'This Month',
      level: 'Gold',
      teamSize: '1,234',
    },
    {
      name: 'David Kim',
      earnings: '$8,420',
      period: 'This Month',
      level: 'Silver',
      teamSize: '987',
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
            Goalsbot Earnings & Commissions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our 5-level commission structure can help you build 
            sustainable income streams and achieve financial freedom with Goalsbot.
          </p>
        </motion.div>

        {/* Daily Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Goalsbot Daily Growth Rate</h3>
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <GrowthChart />
          </div>
        </motion.div>

        {/* Real-time Earnings Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Today\'s Earnings', value: '$247.50', change: '+12.5%', color: 'green' },
            { label: 'This Week', value: '$1,890.25', change: '+8.2%', color: 'blue' },
            { label: 'This Month', value: '$7,456.80', change: '+15.7%', color: 'purple' },
            { label: 'Total Earnings', value: '$45,890.50', change: '+125.3%', color: 'orange' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className={`text-sm font-medium text-${stat.color}-600`}>
                {stat.change} vs last period
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commission Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-xl mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Goalsbot Commission Breakdown by Level
          </h3>
          <div className="space-y-4">
            {[
              { level: 'Level A', members: 12, earnings: '$450.00', percentage: '10%' },
              { level: 'Level B', members: 48, earnings: '$720.00', percentage: '5%' },
              { level: 'Level C', members: 156, earnings: '$936.00', percentage: '2.50%' },
              { level: 'Level D', members: 324, earnings: '$972.00', percentage: '1.25%' },
              { level: 'Level E', members: 567, earnings: '$1,020.75', percentage: '0.75%' },
            ].map((levelData, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{levelData.level}</div>
                    <div className="text-sm text-gray-600">{levelData.members} members</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{levelData.earnings}</div>
                  <div className="text-sm text-gray-600">{levelData.percentage} commission</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Earners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Top Goalsbot Earners This Month
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our most successful Goalsbot members are earning and get inspired 
            by their achievements in building profitable networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topEarners.map((earner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">#{index + 1}</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {earner.name}
              </h4>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {earner.earnings}
              </div>
              <div className="text-sm text-gray-600 mb-2">{earner.period}</div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Level: {earner.level}</span>
                <span className="text-gray-600">Team: {earner.teamSize}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MLM Structure */}
      <MLMStructure />
    </div>
  );
};

export default Earnings;