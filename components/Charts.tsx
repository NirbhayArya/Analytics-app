
import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, FunnelChart, Funnel, Tooltip, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts';
import { RevenueData, PerformanceData, MarketShareData, FunnelStep, EngagementData, TrafficSourceData, TechData, RetentionData } from '../types';

const ChartContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                {children}
            </ResponsiveContainer>
        </div>
    </div>
);


export const RevenueChart: React.FC<{ data: RevenueData[] }> = ({ data }) => (
    <ChartContainer title="Revenue Overview">
        <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis dataKey="month" stroke="currentColor" fontSize={12} />
            <YAxis stroke="currentColor" fontSize={12}/>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }}/>
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#38BDF8" strokeWidth={2} />
            <Line type="monotone" dataKey="profit" stroke="#A78BFA" strokeWidth={2} />
        </LineChart>
    </ChartContainer>
);

export const PerformanceChart: React.FC<{ data: PerformanceData[] }> = ({ data }) => (
    <ChartContainer title="Department Performance">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} strokeOpacity={0.2} />
            <XAxis type="number" stroke="currentColor" fontSize={12}/>
            <YAxis type="category" dataKey="department" width={80} stroke="currentColor" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }}/>
            <Bar dataKey="performance" fill="#34D399" barSize={20} />
        </BarChart>
    </ChartContainer>
);

export const MarketShareChart: React.FC<{ data: MarketShareData[] }> = ({ data }) => (
    <ChartContainer title="Market Share">
        <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }}/>
            <Legend />
        </PieChart>
    </ChartContainer>
);


export const SalesFunnelChart: React.FC<{ data: FunnelStep[] }> = ({ data }) => (
    <ChartContainer title="Sales Funnel">
         <FunnelChart>
            <Tooltip />
            <Funnel dataKey="value" data={data} isAnimationActive>
                 {data.map((_entry, index) => (
                     <Cell key={`cell-${index}`} fill={['#38bdf8', '#60a5fa', '#818cf8', '#a78bfa'][index % 4]} />
                 ))}
            </Funnel>
        </FunnelChart>
    </ChartContainer>
);

export const EngagementChart: React.FC<{ data: EngagementData[] }> = ({ data }) => (
    <ChartContainer title="User Engagement">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2}/>
            <XAxis dataKey="name" stroke="currentColor" fontSize={12}/>
            <YAxis stroke="currentColor" fontSize={12}/>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }}/>
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
    </ChartContainer>
);

export const TrafficSourceChart: React.FC<{ data: TrafficSourceData[] }> = ({ data }) => (
     <ChartContainer title="Traffic Sources">
        <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5}>
                 {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }}/>
            <Legend />
        </PieChart>
    </ChartContainer>
);

export const TechChart: React.FC<{ data: TechData[], title: string }> = ({ data, title }) => (
     <ChartContainer title={title}>
        <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                 {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }}/>
            <Legend />
        </PieChart>
    </ChartContainer>
);


export const RetentionChart: React.FC<{ data: RetentionData[] }> = ({ data }) => {
    const weeks = ['Week 0', 'Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const colors = ['#38bdf8', '#60a5fa', '#818cf8', '#a78bfa', '#c084fc'];
    return (
    <ChartContainer title="User Retention by Cohort">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2}/>
            <XAxis dataKey="cohort" stroke="currentColor" fontSize={12}/>
            <YAxis stroke="currentColor" fontSize={12}/>
            <Tooltip contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none' }}/>
            <Legend />
            {weeks.map((week, i) => (
                 <Bar key={week} dataKey={week} stackId="a" fill={colors[i]} />
            ))}
        </BarChart>
    </ChartContainer>
    );
}
