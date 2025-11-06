
import {
  DocumentReportIcon,
  UserGroupIcon,
  ClockIcon,
  TemplateIcon,
} from './components/Icons';

import { QuickAction } from './types';

// Kept quickActions as it contains non-serializable icon components.
export const quickActions: QuickAction[] = [
    { name: 'New Report', icon: DocumentReportIcon },
    { name: 'Add User', icon: UserGroupIcon },
    { name: 'Check Logs', icon: ClockIcon },
    { name: 'View Templates', icon: TemplateIcon }
];
