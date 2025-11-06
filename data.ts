
import {
  UsersIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  ArrowTrendingUpIcon,
} from './components/Icons';
import {
    KpiData,
    Activity,
    CSATData,
    RevenueData,
    PerformanceData,
    GeoData,
    TopPerformer,
    MarketShareData,
    FunnelStep,
    TableRowData,
    TeamMember,
    EngagementData,
    TrafficSourceData,
    DemographicsData,
    ReferrerData,
    ContentPerformanceData,
    SiteSpeedMetric,
    TechData,
    RetentionData,
    RecentReport,
    ScheduledReport,
    AuditLogEntry
} from './types';

export const kpiData: KpiData[] = [
  { title: 'Total Users', value: 4805, change: 12.5, changeType: 'increase', icon: UsersIcon },
  { title: 'Total Revenue', value: 125430, prefix: '$', change: 8.2, changeType: 'increase', icon: CurrencyDollarIcon },
  { title: 'Total Orders', value: 3480, change: 5.7, changeType: 'decrease', icon: ShoppingCartIcon },
  { title: 'Conversion Rate', value: 2.5, suffix: '%', change: 2.1, changeType: 'increase', icon: ArrowTrendingUpIcon },
];

export const recentActivities: Activity[] = [
    { id: 1, user: { name: 'Alex Ray', avatar: 'https://i.pravatar.cc/40?img=6' }, action: 'generated a new report', target: 'Q3 Financial Summary', timestamp: '2m ago' },
    { id: 2, user: { name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/40?img=11' }, action: 'updated user permissions for', target: 'Casey Smith', timestamp: '1h ago' },
    { id: 3, user: { name: 'Casey Smith', avatar: 'https://i.pravatar.cc/40?img=3' }, action: 'pushed a new design update', target: 'Analytics Dashboard v2', timestamp: '3h ago' },
    { id: 4, user: { name: 'Taylor Brown', avatar: 'https://i.pravatar.cc/40?img=5' }, action: 'launched a new marketing campaign', target: 'Summer Sale 2024', timestamp: 'yesterday' },
    { id: 5, user: { name: 'Alex Ray', avatar: 'https://i.pravatar.cc/40?img=6' }, action: 'commented on a task', target: 'API Integration', timestamp: 'yesterday' },
];

export const csatData: CSATData = {
    score: 92,
    totalResponses: 1250,
    weeklyChange: 2
};

export const revenueData: RevenueData[] = [
  { month: 'Jan', revenue: 4000, profit: 2400 },
  { month: 'Feb', revenue: 3000, profit: 1398 },
  { month: 'Mar', revenue: 2000, profit: 9800 },
  { month: 'Apr', revenue: 2780, profit: 3908 },
  { month: 'May', revenue: 1890, profit: 4800 },
  { month: 'Jun', revenue: 2390, profit: 3800 },
];

export const performanceData: PerformanceData[] = [
  { department: 'Sales', performance: 92 },
  { department: 'Marketing', performance: 78 },
  { department: 'Engineering', performance: 85 },
  { department: 'Support', performance: 95 },
  { department: 'HR', performance: 72 },
];

export const geoData: GeoData[] = [
    { country: 'USA', sales: 4000, color: '#38bdf8' },
    { country: 'Canada', sales: 3000, color: '#60a5fa' },
    { country: 'Mexico', sales: 2000, color: '#818cf8' },
    { country: 'Brazil', sales: 2780, color: '#a78bfa' },
    { country: 'UK', sales: 1890, color: '#c084fc' },
    { country: 'Germany', sales: 2390, color: '#f9a8d4' },
];

export const topPerformers: TopPerformer[] = [
    { id: 1, name: 'Jamie Lannister', avatar: 'https://i.pravatar.cc/40?img=1', sales: 125000, change: 15 },
    { id: 2, name: 'Cersei Lannister', avatar: 'https://i.pravatar.cc/40?img=2', sales: 112000, change: 8 },
    { id: 3, name: 'Daenerys Targaryen', avatar: 'https://i.pravatar.cc/40?img=4', sales: 98000, change: -5 },
    { id: 4, name: 'Jon Snow', avatar: 'https://i.pravatar.cc/40?img=7', sales: 85000, change: 22 },
];

export const marketShareData: MarketShareData[] = [
  { name: 'Product A', value: 400, color: '#38bdf8' },
  { name: 'Product B', value: 300, color: '#60a5fa' },
  { name: 'Product C', value: 300, color: '#818cf8' },
  { name: 'Product D', value: 200, color: '#a78bfa' },
];

export const salesFunnelData: FunnelStep[] = [
    { value: 100, name: 'Visitors', fill: '#8884d8' },
    { value: 80, name: 'Signed Up', fill: '#83a6ed' },
    { value: 50, name: 'Purchased', fill: '#8dd1e1' },
    { value: 20, name: 'Returned', fill: '#82ca9d' },
];

export const recentTransactions: TableRowData[] = [
  { id: 1, product: 'Wireless Mouse', category: 'Electronics', sales: 150, revenue: 3750, status: 'Active' },
  { id: 2, product: 'Ergonomic Keyboard', category: 'Electronics', sales: 80, revenue: 6400, status: 'Active' },
  { id: 3, product: 'Standing Desk', category: 'Furniture', sales: 45, revenue: 11250, status: 'Pending' },
  { id: 4, product: 'Webcam Pro', category: 'Electronics', sales: 200, revenue: 15000, status: 'Active' },
  { id: 5, product: 'Laptop Stand', category: 'Accessories', sales: 300, revenue: 7500, status: 'Discontinued' },
];

export const teamMembers: TeamMember[] = [
    { id: 1, name: 'Alex Ray', avatar: 'https://i.pravatar.cc/40?img=6', email: 'alex.ray@example.com', role: 'Admin' },
    { id: 2, name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/40?img=11', email: 'jordan.lee@example.com', role: 'Developer' },
    { id: 3, name: 'Casey Smith', avatar: 'https://i.pravatar.cc/40?img=3', email: 'casey.smith@example.com', role: 'Designer' },
    { id: 4, name: 'Taylor Brown', avatar: 'https://i.pravatar.cc/40?img=5', email: 'taylor.brown@example.com', role: 'Marketing' },
];

export const engagementData: EngagementData[] = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];

export const trafficSourceData: TrafficSourceData[] = [
    { name: 'Organic', value: 45, color: '#38bdf8' },
    { name: 'Direct', value: 25, color: '#60a5fa' },
    { name: 'Referral', value: 20, color: '#818cf8' },
    { name: 'Social', value: 10, color: '#a78bfa' },
];

export const demographicsData: DemographicsData[] = [
    { name: '18-24', value: 25, color: '#38bdf8' },
    { name: '25-34', value: 35, color: '#60a5fa' },
    { name: '35-44', value: 20, color: '#818cf8' },
    { name: '45+', value: 20, color: '#a78bfa' },
]

export const topReferrers: ReferrerData[] = [
    { name: 'google.com', visits: 12503 },
    { name: 'twitter.com', visits: 8740 },
    { name: 'github.com', visits: 6201 },
    { name: 'producthunt.com', visits: 4502 },
    { name: 'dev.to', visits: 2310 },
];

export const contentPerformance: ContentPerformanceData[] = [
    { page: '/blog/new-features-q3', views: 4820, avgTime: '4:32' },
    { page: '/pricing', views: 3210, avgTime: '2:15' },
    { page: '/docs/api-introduction', views: 2890, avgTime: '6:45' },
    { page: '/about-us', views: 1560, avgTime: '1:30' },
];

export const siteSpeedMetrics: SiteSpeedMetric[] = [
    { name: 'LCP', value: 2.1, unit: 's', rating: 'good' },
    { name: 'FID', value: 45, unit: 'ms', rating: 'good' },
    { name: 'CLS', value: 0.12, unit: '', rating: 'average' },
    { name: 'TTFB', value: 450, unit: 'ms', rating: 'good' },
]

export const frontendTechData: TechData[] = [
    { name: 'React', value: 65, color: '#38bdf8' },
    { name: 'Vue', value: 15, color: '#60a5fa' },
    { name: 'Angular', value: 10, color: '#818cf8' },
    { name: 'Svelte', value: 5, color: '#a78bfa' },
    { name: 'Other', value: 5, color: '#c084fc' },
];

export const backendTechData: TechData[] = [
    { name: 'Node.js', value: 40, color: '#34d399' },
    { name: 'Python', value: 30, color: '#6ee7b7' },
    { name: 'Go', value: 15, color: '#a7f3d0' },
    { name: 'Java', value: 10, color: '#d1fae5' },
    { name: 'Other', value: 5, color: '#f3f4f6' },
];

export const retentionData: RetentionData[] = [
  { cohort: '2023-W40', 'Week 0': 100, 'Week 1': 85, 'Week 2': 75, 'Week 3': 60, 'Week 4': 50 },
  { cohort: '2023-W41', 'Week 0': 100, 'Week 1': 88, 'Week 2': 78, 'Week 3': 65, 'Week 4': 58 },
  { cohort: '2023-W42', 'Week 0': 100, 'Week 1': 90, 'Week 2': 82, 'Week 3': 75, 'Week 4': 68 },
  { cohort: '2023-W43', 'Week 0': 100, 'Week 1': 92, 'Week 2': 85, 'Week 3': 78, 'Week 4': 72 },
];

export const recentReports: RecentReport[] = [
    { id: 'Q3FR', title: 'Q3 Financial Report', generated: '2023-10-05', author: 'Alex Ray' },
    { id: 'MSR', title: 'Monthly Sales Review', generated: '2023-10-01', author: 'Jordan Lee' },
    { id: 'UER', title: 'User Engagement Report', generated: '2023-09-28', author: 'Casey Smith' },
];

export const scheduledReports: ScheduledReport[] = [
    { id: 'WSR', title: 'Weekly Sales Report', frequency: 'Weekly', nextRun: '2023-10-12' },
    { id: 'DPA', title: 'Daily Performance Analytics', frequency: 'Daily', nextRun: '2023-10-07' },
];

export const auditLog: AuditLogEntry[] = [
    { id: 1, user: { name: 'Alex Ray', avatar: 'https://i.pravatar.cc/40?img=6' }, action: 'Logged In', timestamp: '2023-10-06 09:01:23', ip: '192.168.1.1' },
    { id: 2, user: { name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/40?img=11' }, action: 'Changed user role for Casey Smith to "Editor"', timestamp: '2023-10-06 09:05:41', ip: '192.168.1.10' },
    { id: 3, user: { name: 'Casey Smith', avatar: 'https://i.pravatar.cc/40?img=3' }, action: 'Exported Q3 Financial Report', timestamp: '2023-10-06 09:12:05', ip: '192.168.1.12' },
    { id: 4, user: { name: 'Alex Ray', avatar: 'https://i.pravatar.cc/40?img=6' }, action: 'Updated billing information', timestamp: '2023-10-06 10:30:11', ip: '192.168.1.1' },
    { id: 5, user: { name: 'Taylor Brown', avatar: 'https://i.pravatar.cc/40?img=5' }, action: 'Scheduled a new report "Weekly Marketing KPIs"', timestamp: '2023-10-06 11:00:00', ip: '192.168.1.15' },
];
