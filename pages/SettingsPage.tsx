
import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../constants';
import { TeamMember } from '../types';
import { UserCircleIcon, CreditCardIcon, BellIcon, ShieldCheckIcon } from '../components/Icons';

const settingsTabs = [
    { name: 'Profile', icon: UserCircleIcon },
    { name: 'Billing', icon: CreditCardIcon },
    { name: 'Notifications', icon: BellIcon },
    { name: 'Security', icon: ShieldCheckIcon },
];

const TeamMembersTable: React.FC<{ data: TeamMember[] }> = ({ data }) => (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Team Members</h3>
            <button className="bg-accent-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
                Invite Member
            </button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="p-3 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Name</th>
                        <th className="p-3 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Email</th>
                        <th className="p-3 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Role</th>
                        <th className="p-3 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(member => (
                        <tr key={member.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                            <td className="p-3 font-medium flex items-center whitespace-nowrap">
                                <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full mr-3" />
                                {member.name}
                            </td>
                            <td className="p-3 whitespace-nowrap">{member.email}</td>
                            <td className="p-3 whitespace-nowrap">{member.role}</td>
                            <td className="p-3 whitespace-nowrap">
                                <button className="text-accent-blue hover:underline text-sm">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const SettingsPage: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState('Profile');

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex space-x-2 border-b border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto">
                {settingsTabs.map(tab => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex items-center space-x-2 px-4 py-3 font-medium text-sm transition-colors flex-shrink-0 ${
                            activeTab === tab.name
                                ? 'border-b-2 border-accent-blue text-accent-blue'
                                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                    >
                        <tab.icon className="w-5 h-5"/>
                        <span>{tab.name}</span>
                    </button>
                ))}
            </div>

            <div>
                {activeTab === 'Profile' && <TeamMembersTable data={teamMembers} />}
                {/* Other tabs would have their own components */}
                 {activeTab !== 'Profile' && (
                    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-xl font-semibold">{activeTab} Settings</h3>
                        <p className="mt-2 text-gray-500">Content for this section is not yet implemented.</p>
                    </div>
                )}
            </div>

        </motion.div>
    );
};

export default SettingsPage;
