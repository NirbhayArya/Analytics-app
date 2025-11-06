
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { EngagementChart, TrafficSourceChart, TechChart, RetentionChart } from '../components/Charts';
import { DemographicsData, ReferrerData, ContentPerformanceData, SiteSpeedMetric } from '../types';
import { LightningBoltIcon, SpeedometerIcon, LinkIcon } from '../components/Icons';
import {
    siteSpeedMetrics,
    engagementData,
    trafficSourceData,
    demographicsData,
    contentPerformance,
    retentionData,
    frontendTechData,
    backendTechData,
    topReferrers
} from '../data';

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

const RealtimeOverview: React.FC = () => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Real-time Users</h3>
        <div className="flex items-center justify-center text-green-400">
            <LightningBoltIcon className="w-8 h-8 mr-2"/>
            <p className="text-6xl font-bold">1,204</p>
        </div>
        <p className="text-sm text-gray-500 mt-2">Active users on site right now</p>
    </div>
);

const UserDemographics: React.FC<{data: DemographicsData[]}> = ({data}) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">User Demographics (Age)</h3>
        <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
            <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3}>
                     {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }}/>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
        </div>
    </div>
);

const SiteSpeed: React.FC<{metrics: SiteSpeedMetric[]}> = ({metrics}) => {
    const ratingColors = {
        good: 'text-green-500',
        average: 'text-yellow-500',
        poor: 'text-red-500',
    };
    return (
        <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
                <SpeedometerIcon className="w-6 h-6 mr-3 text-accent-blue" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Site Speed Metrics</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {metrics.map(metric => (
                    <div key={metric.name}>
                        <p className="text-2xl font-bold">{metric.value}<span className="text-lg">{metric.unit}</span></p>
                        <p className={`text-sm font-semibold ${ratingColors[metric.rating]}`}>{metric.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TopReferrers: React.FC<{data: ReferrerData[]}> = ({data}) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
            <LinkIcon className="w-6 h-6 mr-3 text-accent-blue" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Top Referrers</h3>
        </div>
        <ul className="space-y-3">
            {data.map(r => (
                <li key={r.name} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-300">{r.name}</span>
                    <span className="font-semibold">{r.visits.toLocaleString()}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ContentPerformance: React.FC<{data: ContentPerformanceData[]}> = ({data}) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Content Performance</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="p-2 font-semibold text-gray-500">Page</th>
                        <th className="p-2 font-semibold text-gray-500 text-right">Views</th>
                        <th className="p-2 font-semibold text-gray-500 text-right">Avg. Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.page} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                            <td className="p-2 text-accent-blue hover:underline cursor-pointer">{item.page}</td>
                            <td className="p-2 text-right font-medium">{item.views.toLocaleString()}</td>
                            <td className="p-2 text-right">{item.avgTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


const AnalyticsPage: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <AnimatedSection className="lg:col-span-1"><RealtimeOverview /></AnimatedSection>
                <AnimatedSection className="lg:col-span-2"><SiteSpeed metrics={siteSpeedMetrics} /></AnimatedSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AnimatedSection><EngagementChart data={engagementData} /></AnimatedSection>
                <AnimatedSection><TrafficSourceChart data={trafficSourceData} /></AnimatedSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <AnimatedSection><UserDemographics data={demographicsData} /></AnimatedSection>
                <AnimatedSection className="lg:col-span-2"><ContentPerformance data={contentPerformance} /></AnimatedSection>
            </div>

            <AnimatedSection><RetentionChart data={retentionData} /></AnimatedSection>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AnimatedSection><TechChart data={frontendTechData} title="Frontend Technologies" /></AnimatedSection>
                <AnimatedSection><TechChart data={backendTechData} title="Backend Technologies" /></AnimatedSection>
            </div>
            
            <AnimatedSection><TopReferrers data={topReferrers} /></AnimatedSection>

        </motion.div>
    );
};

export default AnalyticsPage;
