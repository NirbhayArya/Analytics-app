
import React from 'react';
import { motion } from 'framer-motion';
import { KpiData } from '../types';

interface KpiCardProps {
  data: KpiData;
}

const KpiCard: React.FC<KpiCardProps> = ({ data }) => {
  const { title, value, prefix = '', suffix = '', change, changeType, icon: Icon } = data;
  const isIncrease = changeType === 'increase';

  return (
    <motion.div 
      className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm flex items-start justify-between"
      whileHover={{ y: -5, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
    >
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">{prefix}{value.toLocaleString()}{suffix}</p>
        <div className="flex items-center mt-2">
          <span className={`text-sm font-semibold ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
            {isIncrease ? '▲' : '▼'} {change}%
          </span>
          <span className="text-xs text-gray-500 ml-2">vs last month</span>
        </div>
      </div>
      <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
        <Icon className="w-6 h-6 text-accent-blue" />
      </div>
    </motion.div>
  );
};

interface KpiCardsProps {
    kpiData: KpiData[];
}

const KpiCards: React.FC<KpiCardsProps> = ({ kpiData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => (
                <KpiCard key={index} data={kpi} />
            ))}
        </div>
    )
}

export default KpiCards;
