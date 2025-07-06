import React from 'react';
import { motion } from 'framer-motion';

const GrowthChart: React.FC = () => {
  const chartData = [
    { day: 'Mon', earnings: 245, growth: 12 },
    { day: 'Tue', earnings: 289, growth: 18 },
    { day: 'Wed', earnings: 356, growth: 23 },
    { day: 'Thu', earnings: 423, growth: 19 },
    { day: 'Fri', earnings: 512, growth: 21 },
    { day: 'Sat', earnings: 634, growth: 24 },
    { day: 'Sun', earnings: 789, growth: 24 },
  ];

  const maxEarnings = Math.max(...chartData.map(d => d.earnings));

  return (
    <div className="space-y-6">
      {/* Chart */}
      <div className="relative h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-xl p-4">
        <div className="flex items-end justify-between h-full space-x-2">
          {chartData.map((data, index) => {
            const height = (data.earnings / maxEarnings) * 100;
            return (
              <div key={data.day} className="flex flex-col items-center flex-1">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative group cursor-pointer"
                  style={{ minHeight: '20px' }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                      <div className="font-semibold">${data.earnings}</div>
                      <div className="text-green-400">+{data.growth}%</div>
                    </div>
                  </div>
                </motion.div>
                <div className="text-sm text-gray-600 mt-2 font-medium">{data.day}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Growth Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">+21.4%</div>
          <div className="text-sm text-gray-600">Weekly Growth</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">$789</div>
          <div className="text-sm text-gray-600">Peak Day</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">$456</div>
          <div className="text-sm text-gray-600">Daily Average</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">7</div>
          <div className="text-sm text-gray-600">Active Days</div>
        </div>
      </div>

      {/* Growth Indicators */}
      <div className="flex items-center justify-center space-x-8 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-600">Daily Earnings</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-600">Growth Rate</span>
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;