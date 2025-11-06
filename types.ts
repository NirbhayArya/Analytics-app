import React from 'react';

export type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

export interface KpiData {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: IconType;
}

export interface QuickAction {
    name: string;
    icon: IconType;
}

export interface Activity {
    id: number;
    user: { name: string; avatar: string; };
    action: string;
    target: string;
    timestamp: string;
}

export interface CSATData {
    score: number;
    totalResponses: number;
    weeklyChange: number;
}

export interface RevenueData {
    month: string;
    revenue: number;
    profit: number;
}

export interface PerformanceData {
    department: string;
    performance: number;
}

export interface GeoData {
    country: string;
    sales: number;
    color: string;
}

export interface TopPerformer {
    id: number;
    name: string;
    avatar: string;
    sales: number;
    change: number;
}

export interface MarketShareData {
    name: string;
    value: number;
    color: string;
}

export interface FunnelStep {
    value: number;
    name: string;
    fill: string;
}

export interface EngagementData {
    name: string;
    uv: number;
    pv: number;
}

export interface TrafficSourceData {
    name: string;
    value: number;
    color: string;
}

export interface DemographicsData {
    name: string;
    value: number;
    color: string;
}

export interface ReferrerData {
    name: string;
    visits: number;
}

export interface ContentPerformanceData {
    page: string;
    views: number;
    avgTime: string;
}

export interface SiteSpeedMetric {
    name: string;
    value: number;
    unit: string;
    rating: 'good' | 'average' | 'poor';
}

export interface TechData {
    name: string;
    value: number;
    color: string;
}

export interface RetentionData {
    cohort: string;
    'Week 0': number;
    'Week 1': number;
    'Week 2': number;
    'Week 3': number;
    'Week 4': number;
}

export interface TableRowData {
  id: number;
  product: string;
  category: string;
  sales: number;
  revenue: number;
  status: 'Active' | 'Pending' | 'Discontinued';
}

export interface TeamMember {
  id: number;
  name: string;
  avatar: string;
  email: string;
  role: string;
}

export interface RecentReport {
    id: string;
    title: string;
    generated: string;
    author: string;
}

export interface ScheduledReport {
    id: string;
    title: string;
    frequency: string;
    nextRun: string;
}

export interface AuditLogEntry {
    id: number;
    user: { name: string; avatar: string; };
    action: string;
    timestamp: string;
    ip: string;
}
