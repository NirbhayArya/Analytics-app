import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import KpiCards from '../components/KpiCards';
import { RevenueChart, PerformanceChart, MarketShareChart, SalesFunnelChart } from '../components/Charts';
import DataTable from '../components/DataTable';
import { kpiData, revenueData, performanceData, marketShareData, salesFunnelData, recentTransactions, quickActions, recentActivities, csatData, geoData, topPerformers } from '../constants';
import { QuickAction, Activity, CSATData, GeoData, TopPerformer } from '../types';
import { MapIcon, ArrowTrendingUpIcon } from '../components/Icons';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
    >
        {children}
    </motion.div>
);

const QuickActions: React.FC<{ actions: QuickAction[] }> = ({ actions }) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {actions.map(action => (
                <button key={action.name} className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <action.icon className="w-6 h-6 text-accent-blue mb-2" />
                    <span className="text-sm font-medium text-center">{action.name}</span>
                </button>
            ))}
        </div>
    </div>
);

const RecentActivity: React.FC<{ activities: Activity[] }> = ({ activities }) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
        <ul className="space-y-4">
            {activities.map(activity => (
                <li key={activity.id} className="flex items-center space-x-3">
                    <img src={activity.user.avatar} alt={activity.user.name} className="w-9 h-9 rounded-full" />
                    <div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">
                            <span className="font-semibold">{activity.user.name}</span> {activity.action} <span className="font-semibold text-accent-blue">{activity.target}</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.timestamp}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const CustomerSatisfaction: React.FC<{ data: CSATData }> = ({ data }) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Customer Satisfaction</h3>
        <div className="relative w-32 h-32">
             <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-gray-200 dark:text-gray-700" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <motion.path
                    className="text-green-500"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={`${data.score}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: `0, 100` }}
                    animate={{ strokeDasharray: `${data.score}, 100` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">{data.score}%</span>
            </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">{data.totalResponses.toLocaleString()} responses</p>
        <div className="flex items-center text-green-500 text-sm font-semibold mt-1">
            <ArrowTrendingUpIcon className="w-4 h-4 mr-1"/>
            <span>{data.weeklyChange}% this week</span>
        </div>
    </div>
);

const GeographicPerformance: React.FC<{ data: GeoData[] }> = ({ data }) => (
     <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sales by Region</h3>
        <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-64">
                 <ResponsiveContainer>
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="country" width={80} stroke="currentColor" fontSize={12} axisLine={false} tickLine={false}/>
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }} cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}/>
                        <Bar dataKey="sales" barSize={15}>
                             {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                <MapIcon className="w-40 h-40 text-gray-300 dark:text-gray-600"/>
            </div>
        </div>
    </div>
);

const TopPerformers: React.FC<{ performers: TopPerformer[] }> = ({ performers }) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Top Performers</h3>
        <ul className="space-y-4">
            {performers.map(p => (
                <li key={p.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={p.avatar} alt={p.name} className="w-9 h-9 rounded-full mr-3" />
                        <div>
                            <p className="font-semibold">{p.name}</p>
                            <p className="text-xs text-gray-500">${p.sales.toLocaleString()} sales</p>
                        </div>
                    </div>
                    <div className={`text-sm font-bold ${p.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {p.change >= 0 ? '+' : ''}{p.change}%
                    </div>
                </li>
            ))}
        </ul>
    </div>
);


const DashboardPage: React.FC = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      <motion.div variants={itemVariants}><KpiCards kpiData={kpiData} /></motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatedSection className="lg:col-span-2"><RevenueChart data={revenueData} /></AnimatedSection>
        <AnimatedSection><PerformanceChart data={performanceData} /></AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatedSection className="xl:col-span-2">
            <DataTable data={recentTransactions} />
        </AnimatedSection>
        <AnimatedSection>
            <RecentActivity activities={recentActivities} />
        </AnimatedSection>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <AnimatedSection><CustomerSatisfaction data={csatData} /></AnimatedSection>
         <AnimatedSection><MarketShareChart data={marketShareData} /></AnimatedSection>
         <AnimatedSection><SalesFunnelChart data={salesFunnelData} /></AnimatedSection>
      </div>
      
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedSection><GeographicPerformance data={geoData} /></AnimatedSection>
        <AnimatedSection><TopPerformers performers={topPerformers} /></AnimatedSection>
      </div>

      <AnimatedSection>
        <QuickActions actions={quickActions}/>
      </AnimatedSection>
    </motion.div>
  );
};

export default DashboardPage;
